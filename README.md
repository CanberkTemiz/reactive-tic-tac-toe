# Airtame Technical Challenge - Tic-tac-toe

This challenge consists of two questions - a programming problem and a written exercise. Submit your solutions by committing them into this git repository.

## Challenge 1

Implement tic-tac-toe for a modern browser, using tools and frameworks of your choice. Your program should satisfy the following requirements:

- design based on the mock-ups provided (the typeface is called Moon, available for free). We expect that you fill in the design details we left out to make the game aesthetically pleasing and easily usable. It is fine to make visual changes from the mock-up - just tell us why you think they're better.
- at least one transition/animation enhancing your final design.

What we're looking for:

- clean separation of game logic and UI rendering code.
- a sense for design and usability, both in visual appearance and CSS structure.
- we like to learn and be surprised, and it would delight us to see something we haven't come across before, whether that's a framework, a coding style, a trick or a design feature. Be sure to highlight what you're proud of or happy about :).

## Challenge 2

Reflect upon your solution to Challenge 1 in writing. We understand that you have limited time to implement your solution, after a long workday or instead of some nice downtime on a weekend. Now is your time to elaborate what you would have done if you had more time.

We're looking for answers to the following:

- if it was your main project, what would be your next move? What do you think is missing to your solution?
  - As a next move, I would implement dynamic game that would take an argument (n) and draws a board (n\*n)
  - As an another next move, howering to any cell could present, probabilty of winning or losing ratio to users. Hint button can suggest those options
  - Difficulty mode can be applied. Hard CPU difficulty could detect possible win cases and try to prevent those.
  - History mode can be applied.
- what additional steps would you take to make sure your code runs well in production and in the future. Ok, this is a silly example, we know tic-tac-toe probably won't break on us. But imagine if the board were 17x17, the rulebook 143 pages long and changing every year.
  - Local storage support could be added. In order to save the game when page is refreshed. Or it would be better to use state management tool to make it save and retrived from storage.
  - It would be crucial to make DOM not to render our boards cell anytime. So, I would implement more helper functions to check small details in order not render components. More general set of verification so to say.
- would you approach it differently, with a tool that requires more setup but does the job better? If so, can you walk us through the solution in some bullet points and high level conceptual code? If not, can you explain to us why your solution beats other alternatives?
  - I tried to create a CPU, once you start clicking around the board, next move will be made by CPU.
  - It would be solved by using state management tools. However, my approach was a bit fast in order to catch deadline. Its a small solution for the task.
  - Save all cells of the board into general state.
  - When click happens all info can be fetch from state.
- what did you enjoy about the process of designing and implementing your solution? Is there anything you found frustrating?
  - Fun part was the building game logic and the catching events.
  - Drawing the css lines was pretty frustrating for me. Especially while I was making the lines with radius. It would had been better if I use SASS, it would help to group some parts of the css.
