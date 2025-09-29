from flask import Flask, render_template, request, redirect, url_for
import json
from helpers import get_overall_rankings

app = Flask(__name__)

@app.route('/')
def index():
    rankings = get_overall_rankings()
    return render_template('index.html', rankings=rankings)

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    ranking_str = request.form['ranking']
    
    # very basic parsing of the ranking string
    # expecting something like "item1:1,item2:2"
    ranking = {}
    for item in ranking_str.split(','):
        key, value = item.split(':')
        ranking[key.strip()] = int(value.strip())

    with open('rankings.json', 'r+') as f:
        all_rankings = json.load(f)
        all_rankings.append({
            'name': name,
            'ranking': ranking
        })
        f.seek(0)
        json.dump(all_rankings, f, indent=4)

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=8080)
