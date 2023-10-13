function myPost() 
{
    var post1= document.post.pd_first_name.value
    if (post1 == "") {
        document.getElementById("ab").innerHTML = "Cannot Be Empty"
        return false
    }
    else {
        var patt = /^[A-z]+$/
        var res = patt.test(post1)
        if (res == false) {
            document.getElementById("ab").innerHTML = "only alphabet is allowed"
            return false
        }
        else {
            document.getElementById("ab").innerHTML = ""

        }


    }

    var post2= document.post.pd_middle_name.value
    if (post2 == "") {
        document.getElementById("ac").innerHTML = "Cannot Be Empty"
        return false
    }
    else {
        var patt = /^[A-z]+$/
        var res = patt.test(post2)
        if (res == false) {
            document.getElementById("ac").innerHTML = "only alphabet is allowed"
            return false
        }
        else {
            document.getElementById("ac").innerHTML = ""

        }


    }


    var post2= document.post.pd_last_name.value
    if (post2 == "") {
        document.getElementById("ad").innerHTML = "Cannot Be Empty"
        return false
    }
    else {
        var patt = /^[A-z]+$/
        var res = patt.test(post2)
        if (res == false) {
            document.getElementById("ad").innerHTML = "only alphabet is allowed"
            return false
        }
        else {
            document.getElementById("ad").innerHTML = ""

        }

    }


    var post2= document.post.pd_dob.value
    if (post2 == "") {
        document.getElementById("af").innerHTML = "Cannot Be Empty"
        return false
    }
    else
    {
        document.getElementById("af").innerHTML = ""

    }

    var post2= document.post.pd_gender.value
    if (post2 == "") {
        document.getElementById("ag").innerHTML = "Cannot Be Empty"
        return false
    }
    else
    {
        document.getElementById("ag").innerHTML = ""

    }

    var post2= document.post.pd_marital_status.value
    if (post2 == "") {
        document.getElementById("ah").innerHTML = "Cannot Be Empty"
        return false
    }
    else
    {
        document.getElementById("ah").innerHTML = ""

    }

    var post2= document.post.pd_email_id.value
    if (post2 == "") {
        document.getElementById("ai").innerHTML = "Cannot Be Empty"
        return false
    }
    else
    {
        document.getElementById("ai").innerHTML = ""

    }

    var post2= document.post.pd_mobile.value
    if (post2 == "") {
        document.getElementById("aj").innerHTML = "Cannot Be Empty"
        return false
    }
    else {
        var patt = /^[0-9]+$/
        var res = patt.test(post2)
        if (res == false) {
            document.getElementById("aj").innerHTML = "Only Digits Are Allowed"
            return false
        }
        else {
            document.getElementById("aj").innerHTML = ""

        }

    }


    var post2= document.post.pd_alternative_mobile.value
    if (post2 == "") {
        document.getElementById("ak").innerHTML = "Cannot Be Empty"
        return false
    }
    else {
        var patt = /^[0-9]+$/
        var res = patt.test(post2)
        if (res == false) {
            document.getElementById("ak").innerHTML = "Only Digits Are Allowed"
            return false
        }
        else {
            document.getElementById("ak").innerHTML = ""

        }

    }

    var post2= document.post.pd_landline.value
    if (post2 == "") {
        document.getElementById("al").innerHTML = "Cannot Be Empty"
        return false
    }
    else
     {
            document.getElementById("al").innerHTML = ""

        }


        var post2= document.post.add_temp_house_name.value
        if (post2 == "") {
            document.getElementById("am").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("am").innerHTML = ""

        }


        var post2= document.post.add_chek_add.value
        if (post2 == "") {
            document.getElementById("an").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("an").innerHTML = ""

        }

        var post2= document.post.add_per_house_name.value
        if (post2 == "") {
            document.getElementById("ao").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("ao").innerHTML = ""

        }

        var post2= document.post.add_temp_street.value
        if (post2 == "") {
            document.getElementById("ap").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("ap").innerHTML = ""

        }

        var post2= document.post.add_per_street.value
        if (post2 == "") {
            document.getElementById("aq").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("aq").innerHTML = ""

        }

        var post2= document.post.add_temp_city.value
        if (post2 == "") {
            document.getElementById("ar").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("ar").innerHTML = ""

        }

        var post2= document.post.add_per_city.value
        if (post2 == "") {
            document.getElementById("as").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("as").innerHTML = ""

        }


        var post2= document.post.add_temp_zip.value
        if (post2 == "") {
            document.getElementById("at").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("at").innerHTML = ""

        }


        var post2= document.post.add_per_zip.value
        if (post2 == "") 
        {
            document.getElementById("au").innerHTML = "Cannot Be Empty"
            return false
        }
        else
        {
                document.getElementById("au").innerHTML = ""

        }


        

        

        
    
}