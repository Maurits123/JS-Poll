from flask import Flask, render_template, request, redirect, url_for
import json
from collections import defaultdict

app = Flask(__name__)

def calculate_average_rankings(all_rankings):
    if not all_rankings:
        return {}

    sum_of_ranks = defaultdict(int)
    number_of_ranks = defaultdict(int)

    for submission in all_rankings:
        for item, rank in submission.get("ranking", {}).items():
            sum_of_ranks[item] += rank
            number_of_ranks[item] += 1

    average_ranks = {
        item: sum_of_ranks[item] / number_of_ranks[item]
        for item in sum_of_ranks
    }
    return average_ranks

@app.route('/')
def index():
    try:
        with open('rankings.json', 'r') as f:
            all_rankings_data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        all_rankings_data = []

    average_ranks = calculate_average_rankings(all_rankings_data)
    sorted_rankings = sorted(average_ranks.items(), key=lambda item: item[1])

    return render_template('index.html', rankings=sorted_rankings)

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    ranking_str = request.form['ranking']
    
    ranking = {}
    for item in ranking_str.split(','):
        key, value = item.split(':')
        ranking[key.strip()] = int(value.strip())

    # Read existing data
    try:
        with open('rankings.json', 'r') as f:
            all_rankings = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        all_rankings = []

    # Append new data
    all_rankings.append({
        'name': name,
        'ranking': ranking
    })

    # Write all data back
    with open('rankings.json', 'w') as f:
        json.dump(all_rankings, f, indent=4)

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=8080)
