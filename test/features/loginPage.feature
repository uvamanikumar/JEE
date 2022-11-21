Feature: Login page
    # Scenario Outline: Checking whether the application validate not registered mobile number or not.
    #     Given launch the url https://school.m-tutor.com/login.php
    #     When User login to the application using invalid credentials "<Mobile>" "<Password>"
    #     Then User should see respective popup message "<Popupmsg>"
    #     Examples:
    #         | Mobile     | Password  | Popupmsg                                |
    #         | 9940160712 | abc124567 | Hii! look's your password is incorrect  |
    #         | 8667651456 | abc123    | User doesn't Exists. Proceed to Sign Up |

    Scenario Outline: Checking whether the page validate using Invalid login Credentials.
        Given launch the url https://school.m-tutor.com/login.php
        When User login to the application using invalid credentials "<Mobile>" "<Password>"
        Then User should see respective error message "<Erromsg>"
        Examples:
            | Mobile     | Password | Erromsg                                          |
            |            |          | Please Enter Mobile Number Please Enter Password |
            | 994016071  | abc      | Mobile number looks incorrect Invalid Password   |
            | 9940160712 | abc      | Invalid Password                                 |
            | 9940160    | abc123   | Mobile number looks incorrect                    |

    # Scenario Outline: Checking the page using valid Credentials
    #     Given launch the url https://school.m-tutor.com/login.php
    #     When User login to the application using valid credentials 9940160712 abc12
    #     Then User should navigate to Grade selection page https://school.m-tutor.com/signup-grade.php
        