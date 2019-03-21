"""
randomsite REST API for random words.

/api/v1/random/

"""
import random

import flask
import randomsite
import requests

# RANDOM_WORDS = ["whoa", "tacos", "nice", "sliver", "manifest", "colloquial",
#                 "inheritance", "silly", "niche"]

# RANDOM_MESSAGES = ["Hello world!", "Good afternoon!", "Hi there!", "What's up?"]


@randomsite.app.route('/content/', methods=["GET"])
def get_content():
    """Get content"""
    data = {}

    r = requests.get('https://ign-apis.herokuapp.com/content?startIndex=0&count=10')
    data = r.json()


    return flask.jsonify(**data)

@randomsite.app.route('/comments/', methods=["GET"])
def get_comments():
    """Get comments from API"""
    data = {}
    random_idx = random.randint(0, len(RANDOM_MESSAGES) - 1)
    data["random_message"] = RANDOM_MESSAGES[random_idx]
    return flask.jsonify(**data)
