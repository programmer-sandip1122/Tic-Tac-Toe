                    const buttons=document.querySelectorAll("button");
                    const winmsg=document.querySelector("#msg");
                    let currentplayer=true;
                    // buttons.forEach((btns)=>{
                    //     btns.addEventListener("click",()=>{
                    //       btns.innerText=currentplayer?"x":"O";
                    //       currentplayer=!currentplayer
                    //     })
                    // })
                    buttons.forEach((btns)=>{
                        btns.addEventListener("click",()=>{
                            if(currentplayer===true){
                                btns.innerText="X"
                            }
                            else{
                                btns.innerText="O"
                            }
                            currentplayer=!currentplayer
                            winner();
                        })
                    })
                    const winningPattern = [
                    [0, 1, 2], // top row
                    [3, 4, 5], // middle row
                    [6, 7, 8], // bottom row
                    [0, 3, 6], // left column
                    [1, 4, 7], // middle column
                    [2, 5, 8], // right column
                    [0, 4, 8], // diagonal
                    [2, 4, 6]  // diagonal
                    ];
                    const winner=()=>{
                        for(let val of winningPattern){
                            let [a,b,c]=val;
                            if(buttons[a].innerText!=="" && buttons[a].innerText===buttons[b].innerText && buttons[b].innerText===buttons[c].innerText){
                                winmsg.innerText=buttons[a].innerText + "is winner"
                                winmsg.style.display="block"
                                
                            }
                        }
                        

                        
                        
                    }
