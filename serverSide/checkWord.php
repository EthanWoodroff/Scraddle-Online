
<?php
    $wordsRaw = /*strtolower*/($_POST["words"]);
    if($wordsRaw == "") {
        die;
    }
    $words = explode(",", $wordsRaw);
    
    foreach($words as $word){
        if(!binaryWordSearch($word)){
            echo("Fake Word");
            die;
        }
    }
    echo("Real Word");

    function binaryWordSearch($targetWord){
        $dictionaryName = "dictionary.txt";
        //$dictionaryName = "english_words_all.txt";
        $allWordsFile = fopen($dictionaryName, "r") or die("Error retrieving server date.");
        $lineCount = count(file($dictionaryName));
        //https://www.w3resource.com/php-exercises/php-basic-exercise-16.php 15:17 23/01/2025
        $allWordsRaw = fread($allWordsFile, filesize($dictionaryName));
        //$new_arr = array_map('trim', explode(',', $str));
        $allWords = array_map('trim', explode("\n", $allWordsRaw));
        fclose($allWordsFile);

        $bottomPointer = 0;
        $topPointer = $lineCount;
        while($bottomPointer <= $topPointer){
            $middlePointer = floor(($bottomPointer + $topPointer)/2);
            $checkWord = $allWords[$middlePointer];
            echo $checkWord . "\n";
            if($targetWord == $checkWord){
                echo $bottomPointer . " " . $topPointer . " " . $targetWord . " " . $checkWord . "\n";
                return true;
            }
            if($targetWord < $checkWord){
                $topPointer = $middlePointer - 1;
            }
            else{
                $bottomPointer = $middlePointer + 1;
            }
        }
        echo $bottomPointer . " " . $topPointer . " " . $targetWord . " " . $checkWord . "\n";
        return false;
    }

?>
