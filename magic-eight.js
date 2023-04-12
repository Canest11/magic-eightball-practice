image_array = [
`magic8ball_1.png`,
`magic8ball_2.png`,
`magic8ball_3.png`,
`magic8ball_4.png`,
`magic8ball_5.png`,
`magic8ball_6.png`,
`magic8ball_7.png`,
`magic8ball_8.png`,
`magic8ball_9.png`,
`magic8ball_10.png`,
`magic8ball_11.png`,
`magic8ball_12.png`,
`magic8ball_13.png`,
`magic8ball_14.png`,
`magic8ball_15.png`,
`magic8ball_16.png`,
`magic8ball_17.png`,
`magic8ball_18.png`,
`magic8ball_19.png`,
`magic8ball_20.png`,
]

function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array[random_index]

    document.getElementById("get_random_image").src =`./img/$(selected_image)`

}