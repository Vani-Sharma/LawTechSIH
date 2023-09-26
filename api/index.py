from flask import Flask, request
from bot import get_case_description
app = Flask(__name__)
# ans=get_case_description("murder")
# print(ans)
@app.route("/", methods=["POST"])
def main():
    msg = request.json["msg"]
    return get_case_description(msg)

if __name__ == "__main__":
    app.run(debug=True)
