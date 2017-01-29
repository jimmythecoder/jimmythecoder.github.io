var app;
(function (app) {
    var Init = (function () {
        function Init() {
            Skype.ui({
                "name": "dropdown",
                "element": "SkypeButton",
                "participants": ["rallyrulz"]
            });
            $('section.knowledge .range').each(function (index, elem) {
                var leftOffset = $(this).data('value') + '%';
                $('.line', this).css('left', leftOffset);
            });
        }
        return Init;
    }());
    app.Init = Init;
    var Email = (function () {
        function Email() {
            window.location.href = 'mailto:james.harris@jharris.nz';
            return false;
        }
        return Email;
    }());
    app.Email = Email;
    $(Init);
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxJQUFVLEdBQUcsQ0EyQlo7QUEzQkQsV0FBVSxHQUFHO0lBRVo7UUFDQztZQUVFLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDN0IsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBYSxFQUFFLElBQWE7Z0JBQ3ZFLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUU3QyxDQUFDLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0YsV0FBQztJQUFELENBZkEsQUFlQyxJQUFBO0lBZlksUUFBSSxPQWVoQixDQUFBO0lBRUQ7UUFDQztZQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGdDQUFnQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBQ0YsWUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksU0FBSyxRQUtqQixDQUFBO0lBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxFQTNCUyxHQUFHLEtBQUgsR0FBRyxRQTJCWiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9za3lwZS5kLnRzXCIgLz5cblxubmFtZXNwYWNlIGFwcCB7XG5cblx0ZXhwb3J0IGNsYXNzIEluaXQge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHQgU2t5cGUudWkoe1xuXHRcdFx0XHQgXCJuYW1lXCI6IFwiZHJvcGRvd25cIixcblx0XHRcdFx0IFwiZWxlbWVudFwiOiBcIlNreXBlQnV0dG9uXCIsXG5cdFx0XHRcdCBcInBhcnRpY2lwYW50c1wiOiBbXCJyYWxseXJ1bHpcIl1cblx0XHRcdCB9KTtcblxuXHRcdFx0ICQoJ3NlY3Rpb24ua25vd2xlZGdlIC5yYW5nZScpLmVhY2goZnVuY3Rpb24oaW5kZXg6IG51bWJlciwgZWxlbTogRWxlbWVudCkge1xuXHRcdFx0XHQgbGV0IGxlZnRPZmZzZXQgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJykgKyAnJSc7XG5cblx0XHRcdFx0ICQoJy5saW5lJyx0aGlzKS5jc3MoJ2xlZnQnLCBsZWZ0T2Zmc2V0KTtcblx0XHRcdCB9KTtcblx0XHR9XG5cdH1cblxuXHRleHBvcnQgY2xhc3MgRW1haWwge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnbWFpbHRvOmphbWVzLmhhcnJpc0BqaGFycmlzLm56Jztcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQkKEluaXQpO1xufVxuIl19
