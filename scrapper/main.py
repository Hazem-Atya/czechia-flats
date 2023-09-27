

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from chromedriver_py import binary_path 
from unidecode import unidecode
from webdriver_manager.chrome import ChromeDriverManager
import psycopg2
import os 

PG_USER = os.getenv("PG_USER", "postgres")
PG_PASSWORD = os.getenv("PG_PASSWORD", "paswword")
PG_HOST= os.getenv("PG_HOST", "localhost")
PG_PORT= os.getenv("PG_PORT", "5432")
PG_DB= os.getenv("PG_DB", "postgres")



def insertRow(title,price,locality, image_url):
    '''
    insert row in table definitive_consumption
    '''
    statement = "INSERT INTO flats (title, price, locality, image_url) VALUES (%s,%s,%s,%s)"
    params = (title,price,locality, image_url)
    cursor.execute(statement, params)


print(PG_HOST)
print(PG_HOST)
print(PG_HOST)
conn = psycopg2.connect(database=PG_DB,
                        host=PG_HOST,
                        user=PG_USER,
                        password=PG_PASSWORD,
                        port=PG_PORT)
cursor = conn.cursor()

NB_PAGES=25
chrome_options = Options()
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--headless')
chrome_options.add_experimental_option('excludeSwitches', ['enable-logging'])

svc= webdriver.ChromeService(executable_path=binary_path)

driver = webdriver.Chrome(service=svc, options=chrome_options)


driver = webdriver.Chrome(service=Service(
            ChromeDriverManager().install()), options=chrome_options)


driver.implicitly_wait(5) # seconds



div_locator=(By.XPATH,'//div[@class="szn-cmp-dialog-container"]')
agree_locator= (By.XPATH,f'//button[contains(., "I agree") and @data-testid="button-agree"]')



for i in range(NB_PAGES):
    driver.get(f"https://www.sreality.cz/en/search/for-sale/apartments?page={i+1}")

    elements = driver.find_elements(
    By.XPATH, '//div[contains(@class,"property ng-scope")]')

    for el in elements:
        title_el = el.find_element(By.XPATH, './/span[contains(@class,"name")]')
        locality_el = el.find_element(
            By.XPATH, './/span[contains(@class,"locality")]')
        price_el = el.find_element(By.XPATH, './/span[contains(@class,"price")]')
        first_image_el = el.find_element(By.XPATH, './/img')
        title = unidecode(title_el.get_attribute('innerText'))
        locality = unidecode(locality_el.get_attribute('innerText'))
        price = unidecode (price_el.get_attribute('innerText'))
        image_url = first_image_el.get_attribute('src')
        insertRow(title,price,locality,image_url)

    conn.commit()

conn.close()

driver.close()
