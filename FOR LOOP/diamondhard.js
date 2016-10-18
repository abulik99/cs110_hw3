const tpel = function (char , times)
{
    if(times===0)
     return '';
    return ''+tpel(char,times-1)+char;
};
const verev = function (spc, astx)
{
    console.log(tpel(' ',spc)+tpel('*',astx));
    if(spc===0)
    {
        return;
    }
    return verev(spc-1,astx+2);
};
const nerqev = function (spc,astx)
{
    console.log(tpel(' ',spc)+tpel('*',astx));
    if(astx===1)
    {
        return;
    }
    return nerqev(spc+1,astx-2);
};
const diamond = function (n)
{
    if(n%2 === 0)
    {
        n = n + 1;
    }
    debugger;
    verev((n-1)/2,1);
    nerqev(1,n-2);
};
diamond(5);