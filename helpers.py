import json

def calculate_average_rankings():
    with open('rankings.json', 'r') as f:
        rankings = json.load(f)
    
    if not rankings:
        return {}
    
    total_rankings = {}
    for ranking in rankings:
        for item, rank in ranking['ranking'].items():
            if item not in total_rankings:
                total_rankings[item] = []
            total_rankings[item].append(rank)
            
    average_rankings = {}
    for item, ranks in total_rankings.items():
        average_rankings[item] = sum(ranks) / len(ranks)
        
    return average_rankings

def get_overall_rankings():
    average_rankings = calculate_average_rankings()
    sorted_rankings = sorted(average_rankings.items(), key=lambda item: item[1])
    return sorted_rankings