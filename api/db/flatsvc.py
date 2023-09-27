from sqlalchemy.orm import Session

from . import models, schemas



def get_flats(db: Session, skip: int = 0, limit: int = 500):
    nb_rows = db.query(models.Flat).count();
    flats= db.query(models.Flat).offset(skip).limit(limit).all()
    return (flats,nb_rows)


