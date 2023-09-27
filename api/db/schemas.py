from pydantic import BaseModel


class Flat(BaseModel):
    id: int
    title: str
    price: str
    locality: str

    class Config:
        orm_mode = True