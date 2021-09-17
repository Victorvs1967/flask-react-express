# tools/add_test_content.py

from storage.card import Card
from wiring import Wiring


wiring = Wiring()

wiring.card_dao.create(Card(
  slug='helloworld',
  name='Hello, World!',
  markdown="""
This is a hello-world page.
"""))