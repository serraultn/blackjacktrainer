const scenarios = [{'dealerCard': '2', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['21'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['20'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['19'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['18'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['17'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['16'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['16'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['16'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['16'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['16'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['16'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['16'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['16'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['16'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['16'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['15'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['15'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['15'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['15'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['15'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['15'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['15'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['15'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['15'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['15'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['14'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['14'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['14'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['14'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['14'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['14'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['14'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['14'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['14'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['14'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['13'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['13'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['13'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['13'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['13'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['13'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['13'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['13'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['13'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['13'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['12'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['12'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['12'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['12'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['12'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['12'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['12'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['12'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['12'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['12'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '3', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '4', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '8', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '9', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '10', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': 'A', 'playerCards': ['11'], 'action': 'D'}, {'dealerCard': '2', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '3', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '4', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '8', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '9', 'playerCards': ['10'], 'action': 'D'}, {'dealerCard': '10', 'playerCards': ['10'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['10'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['9'], 'action': 'D'}, {'dealerCard': '3', 'playerCards': ['9'], 'action': 'D'}, {'dealerCard': '4', 'playerCards': ['9'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['9'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['9'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['9'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['9'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['9'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['9'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['9'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': '5', 'playerCards': ['8'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['8'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['8'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '5', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '6', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '7', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '5', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '6', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '7', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '5', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '6', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '7', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['A-9'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['A-8'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['A-8'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['A-7'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['A-7'], 'action': 'D'}, {'dealerCard': '4', 'playerCards': ['A-7'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['A-7'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['A-7'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['A-7'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['A-7'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['A-7'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['A-7'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['A-7'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['A-6'], 'action': 'D'}, {'dealerCard': '3', 'playerCards': ['A-6'], 'action': 'D'}, {'dealerCard': '4', 'playerCards': ['A-6'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['A-6'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['A-6'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['A-6'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['A-6'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['A-6'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['A-6'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['A-6'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['A-5'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['A-5'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['A-5'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['A-5'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['A-5'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['A-5'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['A-5'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['A-5'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['A-5'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['A-5'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['A-4'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['A-4'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['A-4'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['A-4'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['A-4'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['A-4'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['A-4'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['A-4'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['A-4'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['A-4'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['A-3'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['A-3'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['A-3'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['A-3'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['A-3'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['A-3'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['A-3'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['A-3'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['A-3'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['A-3'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['A-2'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['A-2'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['A-2'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['A-2'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['A-2'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['A-2'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['A-2'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['A-2'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['A-2'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['A-2'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '3', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '4', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '5', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '6', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '7', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '8', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '9', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '10', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': 'A', 'playerCards': ['A-A'], 'action': 'SP'}, {'dealerCard': '2', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '3', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '4', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '5', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '6', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '7', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '9', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': '10', 'playerCards': ['A-A'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['A-A'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['9'], 'action': 'SP'}, {'dealerCard': '3', 'playerCards': ['9'], 'action': 'SP'}, {'dealerCard': '4', 'playerCards': ['9'], 'action': 'SP'}, {'dealerCard': '5', 'playerCards': ['9'], 'action': 'SP'}, {'dealerCard': '6', 'playerCards': ['9'], 'action': 'SP'}, {'dealerCard': '7', 'playerCards': ['9'], 'action': 'S'}, {'dealerCard': '8', 'playerCards': ['9'], 'action': 'SP'}, {'dealerCard': '9', 'playerCards': ['9'], 'action': 'SP'}, {'dealerCard': '10', 'playerCards': ['9'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['9'], 'action': 'S'}, {'dealerCard': '2', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '3', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '4', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '5', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '6', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '7', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '8', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '9', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '10', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': 'A', 'playerCards': ['8'], 'action': 'SP'}, {'dealerCard': '2', 'playerCards': ['7'], 'action': 'SP'}, {'dealerCard': '3', 'playerCards': ['7'], 'action': 'SP'}, {'dealerCard': '4', 'playerCards': ['7'], 'action': 'SP'}, {'dealerCard': '5', 'playerCards': ['7'], 'action': 'SP'}, {'dealerCard': '6', 'playerCards': ['7'], 'action': 'SP'}, {'dealerCard': '7', 'playerCards': ['7'], 'action': 'SP'}, {'dealerCard': '8', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['7'], 'action': 'S'}, {'dealerCard': 'A', 'playerCards': ['7'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['6'], 'action': 'SP'}, {'dealerCard': '3', 'playerCards': ['6'], 'action': 'SP'}, {'dealerCard': '4', 'playerCards': ['6'], 'action': 'SP'}, {'dealerCard': '5', 'playerCards': ['6'], 'action': 'SP'}, {'dealerCard': '6', 'playerCards': ['6'], 'action': 'SP'}, {'dealerCard': '7', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['6'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '3', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '4', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '5', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '8', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '9', 'playerCards': ['5'], 'action': 'D'}, {'dealerCard': '10', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['5'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': '5', 'playerCards': ['4'], 'action': 'D'}, {'dealerCard': '6', 'playerCards': ['4'], 'action': 'D'}, {'dealerCard': '7', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': '8', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['4'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['3'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['3'], 'action': 'H'}, {'dealerCard': '4', 'playerCards': ['3'], 'action': 'SP'}, {'dealerCard': '5', 'playerCards': ['3'], 'action': 'SP'}, {'dealerCard': '6', 'playerCards': ['3'], 'action': 'SP'}, {'dealerCard': '7', 'playerCards': ['3'], 'action': 'SP'}, {'dealerCard': '8', 'playerCards': ['3'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['3'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['3'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['3'], 'action': 'H'}, {'dealerCard': '2', 'playerCards': ['2'], 'action': 'H'}, {'dealerCard': '3', 'playerCards': ['2'], 'action': 'SP'}, {'dealerCard': '4', 'playerCards': ['2'], 'action': 'SP'}, {'dealerCard': '5', 'playerCards': ['2'], 'action': 'SP'}, {'dealerCard': '6', 'playerCards': ['2'], 'action': 'SP'}, {'dealerCard': '7', 'playerCards': ['2'], 'action': 'SP'}, {'dealerCard': '8', 'playerCards': ['2'], 'action': 'H'}, {'dealerCard': '9', 'playerCards': ['2'], 'action': 'H'}, {'dealerCard': '10', 'playerCards': ['2'], 'action': 'H'}, {'dealerCard': 'A', 'playerCards': ['2'], 'action': 'H'}];

export default scenarios;