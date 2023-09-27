from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
from db import flatsvc
from db import  models, schemas
from db.database import SessionLocal, engine


origins =["*"]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/flats/")
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    flats, nb_rows = flatsvc.get_flats(db, skip=skip, limit=limit)
    return {"flats": flats, "pagination":{"total_records":nb_rows, "skip":skip, "limit":limit}}

