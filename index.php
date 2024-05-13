<?php
if (isset($_POST['submit'])) {
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "bolgwebsite";//enter database name

    $con = mysqli_connect($server, $username, $password,$database);
    if (!$con) {
       echo ("not connected");
    }
    echo "successfully connected";
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $desc = $_POST['desc'];
    echo $name." ".$age." ".$gender." ".$phone." ".$desc;
     


   $query=mysqli_query($con,"INSERT INTO `student`(`name`, `age`, `gender`, `email`, `phone`,`other`, `dt`) VALUES ('$name','$age','$gender','$email','$phone','$desc',current_timestamp())");




}

?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="new.css">

<body>
    <img class="img" src="bg.jpg" alt="iit bonbay">
    <div class="con">
        <h1>welcome to RCPIMRD B ombay trip form..</h1>
        <p>fill this form to conferm ur participation...</p>
        <p class="smsg">thanks for submiting form..</p>

        <form action="#" method="POST">
            <input type="text" name="name" id="name" placeholder="enter your name">
            <input type="text" name="age" id="age" placeholder="enter your age">
            <input type="text" name="gender" id="gender" placeholder="enter your gender">
            <input type="email" name="email" id="email" placeholder="enter your email">
            <input type="phone" name="phone" id="phone" placeholder="enter your phone no">
            <textarea name="desc" id="desc" cols="30" row="20" placeholder="enter other info here"></textarea><br>
            <button class="btn" name="submit">submit</button>
        </form>

    </div>
    <!--INSERT  INTO tripp (no, name, age, gender, email, phone, other, dt) VALUES ('1', 'priya', '52', 'female', 'prriya20@gmail.com', '34523421', 'hello this is first database', current_timestamp());-->

</body>

</html>
