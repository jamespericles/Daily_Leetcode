# I skipped my leetcode yesterday in favor of a coding assessment I took. I decided to rework one of the questions I had yesterday in Python rather than JavaScript to kick off week 4

# Prompt:

# A team organizing a university career fair has a list of companies along with their respective arrival times and their duration of stay
# Only one company can present at any time. Given each company's arrival time and the duration they will stay, determine the maximum number of presentation that can be hosted during the career fair.

# Approach:

# Let's first sort the event according to end_time and duration in ascending order. Then let's sweep the events with inital end = - Inf and ans = 0
    # if the arrival time is greater or equal to end, increment ans, update end as the end time for that current event

# Time complexity O(n log n) Space O(n)

def universityCareerFair(arrival, duration):
    aux = sorted(
        list(zip(arrival, duration)),
        key=lambda p: (sum(p), p[1])
    )
    ans, end = 0, -float('inf')
    for arr, dur in aux:
        if arr >= end:
            ans, end = ans + 1, arr + dur
    return ans