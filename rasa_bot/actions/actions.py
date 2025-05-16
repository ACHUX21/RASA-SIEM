
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import requests
import os

class ActionQueryIncidents(Action):
    def name(self):
        return "action_query_incidents"

    def run(self, dispatcher, tracker, domain):
        query = "SecurityIncident | sort by TimeGenerated desc | take 5"
        response = requests.post("http://localhost:3001/api/assistant/query", json={"query": query})
        if response.status_code == 200:
            incidents = response.json().get("tables", [])[0].get("rows", [])
            message = "\n".join([f"- {i[0]}" for i in incidents]) if incidents else "Aucun incident trouvé."
        else:
            message = "Erreur lors de la récupération des incidents."
        dispatcher.utter_message(text=message)
        return []

class ActionGenerateReport(Action):
    def name(self):
        return "action_generate_report"

    def run(self, dispatcher, tracker, domain):
        dispatcher.utter_message(text="📄 Rapport généré. (exemple statique)")
        return []
