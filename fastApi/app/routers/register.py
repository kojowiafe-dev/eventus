from fastapi import APIRouter, HTTPException, status
from sqlmodel import select
import schemas, database, models, hashing, token_access
from routers.mail import send_verification_email

router = APIRouter(
    tags= ['Register'],
    prefix='/register'
)

@router.post("/", response_model=schemas.UserResponse, status_code=status.HTTP_201_CREATED)
async def create_user(request: schemas.UserCreate, session: database.SessionLocal):
    username = request.username
    email = request.email
    password = request.password

    # checking if username is already taken
    username_statement = select(models.User).where(models.User.username == username)
    existing_username = session.exec(username_statement).first()
    if existing_username:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Username already taken')
    
    # checking if email is taken
    email_statement = select(models.User).where(models.User.email == email)
    existing_email = session.exec(email_statement).first()
    
    if existing_email:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Email already taken')

    # user = models.User.model_validate(request)

    # user = models.User(username=request.username, email=request.email, password=request.password)
    hashed_password = hashing.get_password_hash(password)
    user = models.User(
        username=username,
        email=email,
        password=hashed_password,
        is_verified=False
    )
    session.add(user)
    session.commit()
    session.refresh(user)

    return user