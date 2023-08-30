const usersData = [
    { id: 1, name: "@ultramilk_putih", image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/7/4/82a956cc-1c34-43b9-9f2d-7b722be053bb.png", followed: false },
    { id: 2, name: "@diamonmilk_putih", image: "https://ds393qgzrxwzn.cloudfront.net/resize/m400x400/cat1/img/images/0/CTXdAIW4oD.jpg", followed: false },
    { id: 3, name: "@diamonmilk_lowlemak", image: "https://pickybest.id/wp-content/uploads/2021/01/Diamond-Susu-UHT-Rendah-Lemak-Tinggi-Kalsium.jpg", followed: false },
    { id: 4, name: "@ultramilk_pink", image: "https://jumbo.co.id/wp-content/uploads/2020/07/139.jpg", followed: false },
    { id: 5, name: "@frisianflag_", image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-3737466/frisian-flag_frisian-flag-uht-purefarm-low-fat-californian-strawberry-225ml_full02.jpg", followed: false },
  ];
  
  const userList = document.getElementById("userList");
  const myFriendsList = document.getElementById("myFriendsList");
  const allMembersList = document.getElementById("allMembersList");

  usersData.forEach(user => {
    const userLi = document.createElement("li");
    userLi.classList.add("user");
  
    const userImage = document.createElement("img");
    userImage.src = user.image;
    userImage.alt = user.name + "'s Profile Picture";

    const userName = document.createElement("div");
    userName.textContent = user.name;
  
    const followButton = document.createElement("button");
    followButton.textContent = user.followed ? "Following" : "Follow";
    followButton.classList.add(user.followed ? "unfollow-button" : "follow-button");
        

    followButton.addEventListener("click", () => {
        if (!user.followed) {
            user.followed = true;
            followButton.textContent = "Unfollow";
            followButton.classList.remove("follow-button");
            followButton.classList.add("unfollow-button");

            myFriendsList.appendChild(userLi);
            allMembersList.removeChild(userLi);

          } else {
            user.followed = false;
            followButton.textContent = "Follow";
            followButton.classList.remove("unfollow-button");
            followButton.classList.add("follow-button");
    
            allMembersList.appendChild(userLi);
            myFriendsList.removeChild(userLi);
          }
    });
  
    userLi.appendChild(userImage);
    userLi.appendChild(userName);
    userLi.appendChild(followButton);
  
    userList.appendChild(userLi);
  });