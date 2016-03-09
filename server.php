<?php 

    $file="address.json";

   // var_dump(json_decode(readfile($file)));
    if($_GET){
        echo "get";
    }
    if($_POST){

        $obj = file_get_contents($file);

        $result = json_decode($obj,true);
        // print_r($result);
      // print_r($result[0]["id"]);
      //  echo count($result);
        $last_id =  $result[count($result) -1]["id"];
        $input = array("id"=>$last_id+1, "name" => $_POST['name'], "telephone"=> $_POST['telephone']);
        array_push($result, $input);
        // print_r($result);
        $json_string = json_encode($result);
        file_put_contents($file, $json_string);

       
    }

?>