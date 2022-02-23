import json
rankingJsonFile = open('ranking.json')
metaJsonFile = open('_metadata.json')

 
rankingJsonData = json.load(rankingJsonFile)
metaJsonData = json.load(metaJsonFile)

for i, item in enumerate(rankingJsonData):
    
    attribute = metaJsonData[i]['attributes']
    payload = {
        "background": '',
        "base": '',
        "clothes": '',
        "ears": '',
        "eyes": '',
        "hat": '',
        "mouth": '',
    }
    payload['background'] = attribute[0]['value']
    payload['base'] = attribute[1]['value']
    payload['clothes'] = attribute[2]['value']
    payload['ears'] = attribute[3]['value']
    payload['eyes'] = attribute[4]['value']
    payload['hat'] = attribute[5]['value']
    payload['mouth'] = attribute[6]['value']
    
    item['attributes'] = payload

with open('data.json', 'w') as f:
    json.dump(rankingJsonData, f)
 
rankingJsonFile.close()
metaJsonFile.close()