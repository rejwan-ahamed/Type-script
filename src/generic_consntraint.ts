// this function will takes number or string as an argument
function echo<T extends number | string>(value: T): T {
    return value;
}

echo(1);
echo('1');
// echo(true);