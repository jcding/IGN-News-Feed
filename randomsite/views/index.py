"""
Randomsite index (main) view.

URLs include:
/

"""
import flask
import randomsite


@randomsite.app.route('/', methods=["GET"])
def show_index():
    """Display / route."""
    return flask.render_template("index.html")
