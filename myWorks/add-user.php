<?php
	sleep(1);
	require 'config.php';
	echo $_POST['password'];
	echo sha1($_POST['password']);
	$query = "INSERT INTO user (user, pass, email, sex, birthday, date) 
			VALUES ('{$_POST['userName']}', sha1('{$_POST['password']}'), '{$_POST['email']}', '{$_POST['sex']}', '{$_POST['birthday']}', NOW())";
	
	mysql_query($query) or die('新增失败！'.mysql_error());
	
	echo mysql_affected_rows();
	
	mysql_close();
?>