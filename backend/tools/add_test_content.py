# tools/add_test_content.py

from storage.card import Card
from tasks.parse import parse_card_markup
from wiring import Wiring


wiring = Wiring()

try:
  card = wiring.card_dao.get_by_slug('helloworld')
except:
  wiring.card_dao.create(Card(
    slug='helloworld',
    name='Hello, World!',
    markdown="""
This is a hello-world page.
  """))

wiring.task_queue.enqueue_call(
  parse_card_markup, kwargs={'id': card.id}
)