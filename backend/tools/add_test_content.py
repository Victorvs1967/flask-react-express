# tools/add_test_content.py

from storage.card import Card, CardNotFound
from tasks.parse import parse_card_markup
from wiring import Wiring


wiring = Wiring()

try:
  card = wiring.card_dao.get_by_slug('helloworld')
except CardNotFound:
  card = wiring.card_dao.create(Card(
    slug='helloworld',
    name='Hello, World!',
    markdown="""
This is a hello-world page.
  """))

wiring.task_queue.enqueue_call(
  parse_card_markup, kwargs={'card_id': card.id}
)