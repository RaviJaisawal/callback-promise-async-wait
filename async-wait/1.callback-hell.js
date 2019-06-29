asyncCallOne(()=>{
    asyncCallTwo(()=>{
        asyncCallThree(()=>{
            asyncCallFour(()=>{
                // do somethings here
                //May be Channels or Generators? 
            })
        })
    })
})