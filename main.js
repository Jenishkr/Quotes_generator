        // Array of quotes and authors
        const quotes = [
            { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
            { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
            { text: "In a gentle way, you can shake the world.", author: "Mahatma Gandhi" },
            { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
            { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
            { text: "An eye for an eye only ends up making the whole world blind.", author: "Mahatma Gandhi" },
            { text: "The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi" },
            { text: "Where there is love, there is life.", author: "Mahatma Gandhi" },
            { text: "Freedom is not worth having if it does not include the freedom to make mistakes.", author: "Mahatma Gandhi" },
            { text: "You don't know who is important to you until you actually lose them.", author: "Mahatma Gandhi" },
            { text: "We may stumble and fall, but shall rise again; it should be enough if we did not run away from the battle.", author: "Swami Vivekananda" },
            { text: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
            { text: "In a day, when you don't come across any problems, you can be sure that you are traveling in a wrong path.", author: "Swami Vivekananda" },
            { text: "The greatest religion is to be true to your own nature. Have faith in yourselves.", author: "Swami Vivekananda" },
            { text: "All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.", author: "Swami Vivekananda" },
            { text: "Strength is life, weakness is death.", author: "Swami Vivekananda" },
            { text: "You cannot believe in God until you believe in yourself.", author: "Swami Vivekananda" },
            { text: "Take risks in your life. If you win, you can lead; if you lose, you can guide.", author: "Swami Vivekananda" },
            { text: "Each soul is potentially divine.", author: "Swami Vivekananda" },
            { text: "The mind is everything. What you think, you become.", author: "Buddha" },
            { text: "Your worst enemy cannot harm you as much as your own unguarded thoughts.", author: "Buddha" },
            { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
            { text: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", author: "Buddha" },
            { text: "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.", author: "Buddha" },
            { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
            { text: "What we think, we become.", author: "Buddha" },
            { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
            { text: "Just as a flower does not pick and choose the bees that come to it, we too must learn to let life come to us.", author: "Jenish" },
            { text: "The greatest wealth is to live content with little.", author: "Plato" },
            { text: "The best way to predict the future is to create it.", author: "Jenish" },
            { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Jenish" },
            { text: "The less you respond to negative people, the more peaceful your life will become.", author: "Jenish" },
            { text: "Your future is created by what you do today, not tomorrow.", author: "Jenish" },
            { text: "Sometimes you win, sometimes you learn.", author: "Jenish" },
            { text: "Learn to say 'no' without explaining yourself.", author: "Jenish" },
            { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
            { text: "You have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out.", author: "Steve Jobs" },
            { text: "Don't be trapped by dogma, which is living with the results of other people's thinking.", author: "Steve Jobs" },
            { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs" },
            { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
            { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
            { text: "The best revenge is massive success.", author: "Frank Sinatra" },
            { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
            { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
            { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
            { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
            { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
            { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
            { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" }
            // Add more quotes here
        ];

        const quoteContainer = document.getElementById("quote-container");
        const newQuotesButton = document.getElementById("new-quotes-btn");

        // Function to get a random quote
        function getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
        }

        // Function to display multiple quotes
        function displayMultipleQuotes(numQuotes) {
            quoteContainer.innerHTML = ''; // Clear previous quotes

            for (let i = 0; i < numQuotes; i++) {
                const randomQuote = getRandomQuote();
                const quoteCard = document.createElement("div");
                quoteCard.className = "quote-card";

                const quoteTextElement = document.createElement("p");
                quoteTextElement.className = "quote-text";
                quoteTextElement.textContent = randomQuote.text;

                const quoteAuthorElement = document.createElement("p");
                quoteAuthorElement.className = "quote-author";
                quoteAuthorElement.textContent = "- " + randomQuote.author;

                quoteCard.appendChild(quoteTextElement);
                quoteCard.appendChild(quoteAuthorElement);

                quoteContainer.appendChild(quoteCard);
            }
        }

        // Initial quote display
        displayMultipleQuotes(3);

        // Event listener for the "New Quotes" button
        newQuotesButton.addEventListener("click", function() {
            displayMultipleQuotes(3); // Change the number of quotes displayed here
        });