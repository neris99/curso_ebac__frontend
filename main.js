$(document).ready(function() {
    $('#get-user-data').on('keyup', function() {
        var username = $(this).val();
        $.ajax({
        url: 'https://api.github.com/users/' + username,
        dataType: 'json',
        success: function(data) {
            $('.nameProfile').text(data.name);
            $('.profile-username').text(data.login);
            $('.profile-repos').text(data.public_repos);
            $('.profile-followers').text(data.followers);
            $('.profile-following').text(data.following);
            $('.profile-avatar').attr('src', data.avatar_url);
            $('.profile-link').attr('href', data.html_url);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
        });
    });
});
