const button = document.querySelector('.js-button')
            console.log(button.classList.contains('js-button'))

            function toggled(className){

                const button =document.querySelector(className);

                if( button.classList.contains('is-toggled')){

                    button.classList.remove('is-toggled')
                }

                else{

                   button.classList.add('is-toggled')
                }
            }