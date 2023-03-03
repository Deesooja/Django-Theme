document.getElementById("btn").addEventListener("click", function () {
    // fetch('http://127.0.0.1:8000/images/',{

    //     method:"GET",

    //     headers: {
    //         'X-Requested-With': 'XMLHttpRequest',
    //         'Content-Type': 'application/json'
    //       },
    // })

    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // alert("connection stablist");
})

// function on_page_load(){
//     alert("on page load ")
// }

// document.getElementById("main_div").onload = function() {myFunction()};

// function myFunction(){

//     alert("on page load ")
// }

// window.addEventListener("load", function() {
//     alert("onload")
//   });




// -----------------------------------------Delete Method------------------------------------------

function cart_delete_fun(id) {
    // console.log(form.elements.cstf_token_name.value)
    // console.log(document.forms["form_formcsrf"]["cstf_token_name"].value)

    fetch("http://127.0.0.1:8000/images/"+id+"/",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "X-CSRFToken":document.forms["form_formcsrf"]["cstf_token_name"].value
            // "X-CSRFToken": document.getElementById("csrf_token").value,
            // 'Content-Type': 'application/json'
            
        },
    }).then(response => response.json())
    .then(data =>{
       console.log(data)
    })
    // alert(id)


}






function load_data_fun(data) {

    data.map(function (data_dict) {
        console.log(data_dict)

        let master = document.createElement("div")
        master.className = "border border-primary  p-1 ml-4 mt-4 ";

        let cart = document.createElement("div");
        cart.className = "cart";
        cart.style.width = "18rem";

        cart_image = document.createElement("img");
        cart_image.className = "card-img-top border border-success";
        cart_image.src = data_dict["url"];
        cart_image.alt = "Card image cap";

        let cart_body = document.createElement("div");
        cart_body.className = "card-body";

        let text = document.createElement("p");
        text.className = "card-text";
        text.textContent = data_dict["text"];

        let delete_icon = document.createElement("i");
        delete_icon.className = "fas fa-trash-alt text-danger";
        delete_icon.id = "cart_delete_btn";
        delete_icon.value = data_dict["id"];

        delete_icon.addEventListener("click", function () {

            cart_delete_fun(this.value)
        })



        cart_body.append(text);
        cart.append(cart_image, cart_body);
        master.append(cart, delete_icon);

        var main_div = document.getElementById("main_div");
        main_div.append(master);
    });




    // for (var i = 0; i < 8; i++) {
    //     let master = document.createElement("div")
    //     master.className = "border border-primary  p-1 ml-4 mt-4 ";

    //     let cart = document.createElement("div");
    //     cart.className = "cart";
    //     cart.style.width = "18rem";

    //     cart_image = document.createElement("img");
    //     cart_image.className = "card-img-top border border-success";
    //     cart_image.src = "https://thecustombakers-s3-bucket.s3.amazonaws.com/ItemDefultImage63cfbacdef471present.jpg";
    //     cart_image.alt = "Card image cap";

    //     let cart_body = document.createElement("div");
    //     cart_body.className = "card-body";

    //     let text = document.createElement("p");
    //     text.className = "card-text";
    //     text.textContent = "Some quick example text to build on the card title and make up the bulk of the card content";

    //     let delete_icon = document.createElement("i");
    //     delete_icon.className = "fas fa-trash-alt text-danger";
    //     delete_icon.id = "cart_delete_btn";
    //     delete_icon.value = i;

    //     delete_icon.addEventListener("click", function () {

    //         cart_delete_fun(this.value)
    //     })



    //     cart_body.append(text);
    //     cart.append(cart_image, cart_body);
    //     master.append(cart, delete_icon);

    //     var main_div = document.getElementById("main_div");
    //     main_div.append(master);

    // }

}



function onload_fun() {

    fetch('http://127.0.0.1:8000/images/', {

        method: "GET",

        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        },
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status == 200) {

                load_data_fun(data.data)

                // alert("status is ok")
            }

        })
        .catch(error => {
            console.error('Error:', error);
        });
}




