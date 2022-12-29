function counter(){
    this.count = 0;
    let self = this;

    return {
        
        increase: function(){
            self.count++;
        },

        current: function(){
            return self.count
        },
        
        reset: function(){
            self.count = 0
        }
    }

}

console.log(current(2))

