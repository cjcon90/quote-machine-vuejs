const quoteMachine = new Vue({
   el: "#quote-box",
   data: {
      quote: null,
      author: null,
      index: null,
      show: true,
   },
   methods: {
      getQuote() {
         this.show = false;
         fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((data) => {
               this.index = Math.floor(Math.random() * data.length);
               setTimeout(() => {
                  this.quote = data[this.index].text;
                  this.author = data[this.index].author;
                  this.show = true;
               }, 600);
            });
      },
   },
   computed: {
      tweet() {
         const regex = /␣/g;
         return `http://twitter.com/intent/tweet?text=${this.quote.replace(regex, "%20")} ~ ${this.author.replace(regex, "%20")}`;
      },
   },
});

quoteMachine.getQuote();
