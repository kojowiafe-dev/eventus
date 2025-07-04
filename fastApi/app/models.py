from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

# class Message is used to store the messages sent by users.
class Message(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True, nullable=False)
    email: str = Field(index=True, nullable=False)
    message: str = Field(nullable=False)
    created_at: datetime = Field(default_factory=datetime.utcnow, nullable=False)


class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(index=True, unique=True, nullable=False)
    email: str = Field(index=True, unique=True, nullable=False)
    password: str = Field(nullable=False)
    is_verified: bool = Field(index=True, nullable=False, default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow, nullable=False)


class PasswordResetCode(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True, index=True)
    email: str = Field(nullable=False)
    code: str = Field(nullable=False, max_length=6)
    expires_at: datetime = Field(nullable=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    verified: bool = Field(default=False)