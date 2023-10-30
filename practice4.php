<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Multiplication Table</title>
</head>
<body>
    <h1>Multiplication Table</h1>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $number = $_POST["number"];

        if (is_numeric($number)) {
            echo "<h2>Multiplication Table for $number:</h2>";
            echo "<table border='1'>";
            echo "<tr><th>x</th>";
            for ($i = 1; $i <= $number; $i++) {
                echo "<th>$i</th>";
            }
            echo "</tr>";
            for ($i = 1; $i <= $number; $i++) {
                echo "<tr><th>$i</th>";
                for ($j = 1; $j <= $number; $j++) {
                    $result = $i * $j;
                    echo "<td>$result</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "<p>Please enter a valid number.</p>";
        }
    }
    ?>
</body>
</html>
