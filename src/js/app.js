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
                $('.handle', this).css('left', leftOffset);
            });
            $('section.skills .skills-list .meter').each(function (index, elem) {
                var value = parseInt($(this).data('value'), 10);
                var leftOffset = value + '%';
                var opacity = value / 100;
                $('.inner', this).css({ 'width': leftOffset, opacity: opacity });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxJQUFVLEdBQUcsQ0FtQ1o7QUFuQ0QsV0FBVSxHQUFHO0lBRVo7UUFDQztZQUVFLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDN0IsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBYSxFQUFFLElBQWE7Z0JBQ3ZFLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUU3QyxDQUFDLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7WUFFSCxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFhLEVBQUUsSUFBYTtnQkFDakYsSUFBSSxLQUFLLEdBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2xELElBQUksVUFBVSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzdCLElBQUksT0FBTyxHQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBRTNCLENBQUMsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsT0FBTyxFQUFHLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRixXQUFDO0lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtJQXZCWSxRQUFJLE9BdUJoQixDQUFBO0lBRUQ7UUFDQztZQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGdDQUFnQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBQ0YsWUFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksU0FBSyxRQUtqQixDQUFBO0lBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxFQW5DUyxHQUFHLEtBQUgsR0FBRyxRQW1DWiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9za3lwZS5kLnRzXCIgLz5cblxubmFtZXNwYWNlIGFwcCB7XG5cblx0ZXhwb3J0IGNsYXNzIEluaXQge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0XHQgU2t5cGUudWkoe1xuXHRcdFx0XHQgXCJuYW1lXCI6IFwiZHJvcGRvd25cIixcblx0XHRcdFx0IFwiZWxlbWVudFwiOiBcIlNreXBlQnV0dG9uXCIsXG5cdFx0XHRcdCBcInBhcnRpY2lwYW50c1wiOiBbXCJyYWxseXJ1bHpcIl1cblx0XHRcdCB9KTtcblxuXHRcdFx0ICQoJ3NlY3Rpb24ua25vd2xlZGdlIC5yYW5nZScpLmVhY2goZnVuY3Rpb24oaW5kZXg6IG51bWJlciwgZWxlbTogRWxlbWVudCkge1xuXHRcdFx0XHQgbGV0IGxlZnRPZmZzZXQgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJykgKyAnJSc7XG5cblx0XHRcdFx0ICQoJy5oYW5kbGUnLHRoaXMpLmNzcygnbGVmdCcsIGxlZnRPZmZzZXQpO1xuXHRcdFx0IH0pO1xuXG5cdFx0XHQgJCgnc2VjdGlvbi5za2lsbHMgLnNraWxscy1saXN0IC5tZXRlcicpLmVhY2goZnVuY3Rpb24oaW5kZXg6IG51bWJlciwgZWxlbTogRWxlbWVudCkge1xuXHRcdFx0XHQgbGV0IHZhbHVlIFx0XHQ9IHBhcnNlSW50KCQodGhpcykuZGF0YSgndmFsdWUnKSwgMTApO1xuXHRcdFx0XHQgbGV0IGxlZnRPZmZzZXQgPSB2YWx1ZSArICclJztcblx0XHRcdFx0IGxldCBvcGFjaXR5IFx0PSB2YWx1ZSAvIDEwMDtcblxuXHRcdFx0XHQgJCgnLmlubmVyJyx0aGlzKS5jc3Moeyd3aWR0aCc6ICBsZWZ0T2Zmc2V0LCBvcGFjaXR5OiBvcGFjaXR5fSk7XG5cdFx0XHQgfSk7XG5cdFx0fVxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIEVtYWlsIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ21haWx0bzpqYW1lcy5oYXJyaXNAamhhcnJpcy5ueic7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0JChJbml0KTtcbn1cbiJdfQ==
