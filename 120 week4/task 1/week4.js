var app = new Vue
({
    el:"#app",

    data:
    {
        topic:"<h1>Switch player world<h1>",
        detail:"<h4>The Switch provides a way for children and adults who have been confined to their homes by the outbreak to release their stress.<h4>",
        htmlimage:"",
        date:new Date(),
        mounted:function()
        {
            var _this = this; 
            this.timer = setInterval(function()
            {   
            
            _this.date = new Date(); 
            },1000);
        },
        beforeDestroy:function()
        {
            if(this.timer)
            {
                clearInterval(this.timer); 
            }
        },

    }
  


})