alert("Account number:12345678 and password:9876 and click this icon for help(!)");
function showe() {
    $("#begin").show();
    $("#indicator2").hide();
    $("#loading").hide();
    $("#cash1").hide();
    clearInterval(ani);
}
function showes() {
    $("#result").show();

    $("#bill").hide();
    $("#cash1").hide();
    $("#indicator2").hide();

    clearInterval(mani);
}

$(document).ready(function () {


    ani = setInterval("showe()", 9000);
    $("#loading").show();


    $("#begin").hide();

    $(".welcome").hide();
    $("#success").hide();
    $("#deti").hide();
    $("#error").hide();
    $("#chgpin").hide();
    $("#balen").hide();
    $("#witdrw").hide();
    $("#result").hide();
    $("#wrong").hide();
    $("#depst").hide();
    $("#result2").hide();
    $("#final").hide();
    $("#pinwrg").hide();
    $("#beginwrg").hide();
    $("#bill").hide();
    $("#cash1").hide();
    $("#indicator2").hide();

    $("#btne2").click(function () {


        var accno = 12345678;
        var accs = $(".pass2").val();
        if (accno == accs) {
            $(".welcome").show("fast");
            $("#begin").hide("fast");
            $("#cash1").hide();
            $("#indicator2").hide();
            navigator.vibrate(100);
        }
        else {
            $("#beginwrg").show("fast");
            $("#begin").hide("fast");
            $("#cash1").hide();
            $("#indicator2").hide();
            navigator.vibrate(100);
        }
    });
    $("#bac4").click(function () {
        $("#begin ").show();
        $("#indicator2").hide();
        $("#beginwrg").hide();
        $("#cash1").hide();

        navigator.vibrate(100);
    });
    $("#btne1").click(function () {
        var pin = 9876;

        var pins = $(".pass").val();
        if (pins == pin) {
            $("#success").show();
            $(".welcome").hide("fast");
            $("#cash1").hide();
            $("#indicator2").hide();
            navigator.vibrate(100);
        }


        else {
            $("#pinwrg").show();
            $(".welcome").hide("fast");
            $("#cash1").hide();
            $("#indicator2").hide();
            navigator.vibrate(100);
        }
    });

    $("#bac3").click(function () {
        $(".welcome ").show();

        $("#pinwrg").hide();
        $("#cash1").hide();
        $("#indicator2").hide();
        navigator.vibrate(100);
    });


    $("#backs").click(function () {
        $(".welcome").hide();
        $("#success").hide();
        $("#deti").hide();
        $("#error").hide();
        $("#balen").hide();
        $("#chgpin").hide();
        $("#witdrw").hide();
        $("#result").hide();
        $("#wrong").hide("fast");
        $("#result2").hide("fast");
        $("#depst").hide("fast");
        $("#final").show();
        $("#cash1").hide();
        $("#indicator2").hide();
        navigator.vibrate(100);
    });






    $("#det").click(function () {

        $(".welcome").hide();
        $("#success").hide();
        $("#deti").show();
        $("#error").hide();
        $("#result").hide();
        $("#chgpin").hide();
        $("#balen").hide();
        $("#witdrw").hide();
        $("#wrong").hide("fast");
        $("#depst").hide("fast");
        $("#result2").hide("fast");
        $("#final").hide();
        $("#cash1").hide();
        $("#indicator2").hide();

        navigator.vibrate(100);
        $("#back").click(function () {
            $(".welcome").hide();
            $("#success").show();
            $("#deti").hide();
            $("#error").hide();
            $("#chgpin").hide();
            $("#balen").hide();
            $("#witdrw").hide();
            $("#wrong").hide("fast");
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#final").hide();
            $("#cash1").hide();
            $("#result").hide();
            $("#indicator2").hide();
            navigator.vibrate(100);
        });

    });
    $("#otr").click(function () {
        $(".welcome").hide();
        $("#success").hide();
        $("#deti").hide();
        $("#error").show();
        $("#chgpin").hide();
        $("#balen").hide();
        $("#result").hide();
        $("#wrong").hide("fast");
        $("#depst").hide("fast");
        $("#result2").hide("fast");
        $("#final").hide();
        $("#cash1").hide();
        $("#witdrw").hide();
        $("#indicator2").hide();
        navigator.vibrate(100);
        $("#back2").click(function () {
            $(".welcome").hide();
            $("#success").show();
            $("#deti").hide();
            $("#error").hide();
            $("#chgpin").hide();
            $("#balen").hide();
            $("#witdrw").hide();
            $("#result").hide();
            $("#wrong").hide("fast");
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#final").hide();
            $("#indicator2").hide();
            $("#cash1").hide();
            navigator.vibrate(100);
        });

    });
    $("#cpin").click(function () {
        $(".welcome").hide();
        $("#success").hide();
        $("#deti").hide();
        $("#error").hide();
        $("#chgpin").show();
        $("#balen").hide();
        $("#witdrw").hide();
        $("#result").hide();
        $("#wrong").hide("fast");
        $("#depst").hide("fast");
        $("#result2").hide("fast");
        $("#final").hide();
        $("#indicator2").hide();
        $("#cash1").hide();
        navigator.vibrate(100);
        $("#back3").click(function () {
            $(".welcome").hide();
            $("#success").show();
            $("#deti").hide();
            $("#error").hide();
            $("#balen").hide();
            $("#chgpin").hide();
            $("#result").hide();
            $("#wrong").hide("fast");
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#final").hide();
            $("#cash1").hide();
            $("#witdrw").hide();
            $("#indicator2").hide();
            navigator.vibrate(100);
        });

    });
    $("#mst").click(function () {
        $(".welcome").hide();
        $("#success").hide();
        $("#deti").hide();
        $("#error").hide();
        $("#chgpin").hide();
        $("#balen").show();
        $("#result").hide();
        $("#wrong").hide("fast");
        $("#depst").hide("fast");
        $("#result2").hide("fast");
        $("#final").hide();
        $("#cash1").hide();

        $("#indicator2").hide();
        $("#witdrw").hide();
        navigator.vibrate(100);
        $("#back4").click(function () {
            $(".welcome").hide();
            $("#success").show();
            $("#deti").hide();
            $("#error").hide();
            $("#balen").hide();
            $("#chgpin").hide();
            $("#witdrw").hide();
            $("#result").hide();
            $("#wrong").hide("fast");
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#final").hide();
            $("#cash1").hide();
            $("#indicator2").hide();

            navigator.vibrate(100);
        });

    });

    $("#wdr").click(function () {
        $(".welcome").hide();
        $("#success").hide();
        $("#deti").hide();
        $("#error").hide();
        $("#chgpin").hide();
        $("#balen").hide();
        $("#witdrw").show();
        $("#result").hide();
        $("#wrong").hide("fast");
        $("#depst").hide("fast");
        $("#result2").hide("fast");
        $("#final").hide();
        $("#cash1").hide();

        $("#indicator2").hide();
        navigator.vibrate(100);
        $("#back5").click(function () {
            $(".welcome").hide();
            $("#success").show();
            $("#deti").hide();
            $("#error").hide();
            $("#balen").hide();
            $("#chgpin").hide();
            $("#witdrw").hide();
            $("#result").hide();
            $("#wrong").hide("fast");
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#final").hide();
            $("#indicator2").hide();

            $("#cash1").hide();
            navigator.vibrate(100);
        });
    });
    $("#btns2").click(function () {

        $("#wdt3").empty();
        $("#wdt5").empty();
        $("#wdt7").empty();
        var bal = 50000;
        var str = $("#witdrwno").val();
        if (bal >= str) {
            var sub = bal - str;
            if (str == "") {
                str = 0;
            }
            mani = setInterval("showes()", 7000);
            $("#bill").show();
            $("#cash1").show();
            $("#indicator2").show();
            $("#wdt3").append(str);
            $("#wdt5").append(sub);
            $("#wdt7").append(bal);
            $(".welcome").hide();
            $("#success").hide();
            $("#deti").hide();
            $("#error").hide();
            $("#chgpin").hide();
            $("#balen").hide();
            $("#witdrw").hide();
            $("#result").hide();
            $("#wrong").hide("fast");
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#final").hide();
            navigator.vibrate(100);

            $("#back6").click(function () {
                $(".welcome").hide();
                $("#success").hide();
                $("#deti").hide();
                $("#error").hide();
                $("#balen").hide();
                $("#chgpin").hide();
                $("#witdrw").hide();
                $("#result").hide();
                $("#wrong").hide("fast");
                $("#depst").hide("fast");
                $("#result2").hide("fast");
                $("#final").show();
                $("#cash1").hide();
                $("#indicator2").hide();
                navigator.vibrate(100);
            });
        }
        else {
            $(".welcome").hide();
            $("#success").hide();
            $("#deti").hide();
            $("#error").hide();
            $("#chgpin").hide();
            $("#balen").hide();
            $("#witdrw").hide();
            $("#wrong").show();
            $("#result").hide("fast");
            $("#final").hide();
            $("#cash1").hide();
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#indicator2").hide();

            navigator.vibrate(100);

            $("#back7").click(function () {
                $(".welcome").hide();
                $("#success").hide();
                $("#deti").hide();
                $("#error").hide();
                $("#balen").hide();
                $("#chgpin").hide();
                $("#witdrw").show();
                $("#result").hide();
                $("#wrong").hide("fast");
                $("#depst").hide("fast");
                $("#result2").hide("fast");
                $("#final").hide();
                $("#indicator2").hide();


                $("#cash1").hide();
                navigator.vibrate(100);

            });
        }

    });
    $("#dep").click(function () {
        $(".welcome").hide();
        $("#success").hide();
        $("#deti").hide();
        $("#error").hide();
        $("#chgpin").hide();
        $("#balen").hide();
        $("#witdrw").hide();
        $("#result").hide();
        $("#wrong").hide("fast");
        $("#depst").show("fast");
        $("#result2").hide("fast");
        $("#final").hide();
        $("#cash1").hide();
        $("#indicator2").hide();

        navigator.vibrate(100);

        $("#back8").click(function () {
            $(".welcome").hide();
            $("#success").show();
            $("#deti").hide();
            $("#error").hide();
            $("#balen").hide();
            $("#chgpin").hide();
            $("#witdrw").hide();
            $("#result").hide();
            $("#wrong").hide("fast");
            $("#depst").hide("fast");
            $("#result2").hide("fast");
            $("#final").hide();
            $("#cash1").hide();

            $("#indicator2").hide();
            navigator.vibrate(100);
        });
    });
    $("#bt3").click(function () {
        $("#dep11").empty();
        $("#dep9").empty();
        $("#dep13").empty();
        $("#cash1").hide();
        $("#indicator2").hide();
        var bal1 = 50000;
        var str1 = $("#depstno").val();

        var sub1 = parseInt(bal1) + parseInt(str1);
        if (str1 == "") {
            str1 = 0;
        }
        $("#dep11").append(str1);
        $("#dep9").append(sub1);
        $("#dep13").append(bal1);
        $(".welcome").hide();
        $("#success").hide();
        $("#deti").hide();
        $("#error").hide();
        $("#chgpin").hide();
        $("#balen").hide();
        $("#witdrw").hide();
        $("#result").hide();
        $("#wrong").hide("fast");
        $("#result2").show("fast");
        $("#depst").hide("fast");
        $("#final").hide();
        $("#cash1").hide();
        $("#indicator2").hide();
        navigator.vibrate(100);

        $("#back9").click(function () {
            $(".welcome").hide();
            $("#success").hide();
            $("#deti").hide();
            $("#error").hide();
            $("#balen").hide();
            $("#chgpin").hide();
            $("#witdrw").hide();
            $("#result").hide();
            $("#wrong").hide("fast");
            $("#result2").hide("fast");
            $("#depst").hide("fast");
            $("#final").show();
            $("#cash1").hide();
            $("#indicator2").hide();
            navigator.vibrate(100);
        });


    });

});