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

    count = flask.request.args.get('count', default=20, type=int)
    startIndex = flask.request.args.get('startIndex', default=0, type=int)

    

    

    this_url = 'https://ign-apis.herokuapp.com/content?startIndex=' + str(startIndex) + '&count=' + str(count)

    print(this_url)

    r = requests.get(this_url)
    data = r.json()

    

    return flask.jsonify(**data)



@randomsite.app.route('/comments/', methods=["GET"])
def get_comments():
    """Get comments from API"""
    data = {}
    return flask.jsonify(**data)
