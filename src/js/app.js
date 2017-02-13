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
            var skillsChart = new SkillsChart();
            skillsChart.render();
        }
        return Init;
    }());
    app.Init = Init;
    var Email = (function () {
        function Email() {
            window.location.href = 'mailto:\u006a\u0061\u006d\u0065\u0073\u0040\u006a\u0068\u0061\u0072\u0072\u0069\u0073\u002e\u006e\u007a';
            return false;
        }
        return Email;
    }());
    app.Email = Email;
    var SkillsChart = (function () {
        function SkillsChart() {
        }
        SkillsChart.prototype.render = function () {
            var margins = 2;
            var width = 650;
            var svg = d3.select("svg.skills-chart");
            var g = svg.append("g").attr("transform", "translate(2,2)");
            var format = d3.format(",d");
            var pack = d3.pack()
                .size([width - 4, width - 4]);
            d3.json("/js/skills.json", function (error, root) {
                if (error) {
                    throw error;
                }
                root = d3.hierarchy(root)
                    .sum(function (d) { return d.size; })
                    .sort(function (a, b) { return b.value - a.value; });
                var node = g.selectAll(".node")
                    .data(pack(root).descendants())
                    .enter().append("g")
                    .attr("class", function (d) { return d.children ? "node" : "leaf node"; })
                    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
                node.append("title")
                    .text(function (d) { return d.data.name + "\n" + format(d.value); });
                node.append("circle")
                    .attr("r", function (d) { return d.r - margins; });
                node.filter(function (d) { return !d.children; }).append("text")
                    .attr("dy", "0.3em")
                    .text(function (d) { return d.data.name.substring(0, d.r / 3); });
            });
        };
        return SkillsChart;
    }());
    $(Init);
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUNsRSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztxQkFDbkIsSUFBSSxDQUFDLFVBQVMsQ0FBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7UUFDRixrQkFBQztJQUFELENBN0NBLEFBNkNDLElBQUE7SUFFRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDVCxDQUFDLEVBdkZTLEdBQUcsS0FBSCxHQUFHLFFBdUZaIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3NreXBlLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvZDMvaW5kZXguZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9kMy1jb2xvci9pbmRleC5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2QzLXNjYWxlL2luZGV4LmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvZDMtaGllcmFyY2h5L2luZGV4LmQudHNcIiAvPlxuXG5uYW1lc3BhY2UgYXBwIHtcblxuXHRleHBvcnQgY2xhc3MgSW5pdCB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRcdCBTa3lwZS51aSh7XG5cdFx0XHRcdCBcIm5hbWVcIjogXCJkcm9wZG93blwiLFxuXHRcdFx0XHQgXCJlbGVtZW50XCI6IFwiU2t5cGVCdXR0b25cIixcblx0XHRcdFx0IFwicGFydGljaXBhbnRzXCI6IFtcInJhbGx5cnVselwiXVxuXHRcdFx0IH0pO1xuXG5cdFx0XHQgJCgnc2VjdGlvbi5rbm93bGVkZ2UgLnJhbmdlJykuZWFjaChmdW5jdGlvbihpbmRleDogbnVtYmVyLCBlbGVtOiBFbGVtZW50KSB7XG5cdFx0XHRcdCBsZXQgbGVmdE9mZnNldCA9ICQodGhpcykuZGF0YSgndmFsdWUnKSArICclJztcblxuXHRcdFx0XHQgJCgnLmhhbmRsZScsdGhpcykuY3NzKCdsZWZ0JywgbGVmdE9mZnNldCk7XG5cdFx0XHQgfSk7XG5cblx0XHRcdCAkKCdzZWN0aW9uLnNraWxscyAuc2tpbGxzLWxpc3QgLm1ldGVyJykuZWFjaChmdW5jdGlvbihpbmRleDogbnVtYmVyLCBlbGVtOiBFbGVtZW50KSB7XG5cdFx0XHRcdCBsZXQgdmFsdWUgXHRcdD0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCd2YWx1ZScpLCAxMCk7XG5cdFx0XHRcdCBsZXQgbGVmdE9mZnNldCA9IHZhbHVlICsgJyUnO1xuXHRcdFx0XHQgbGV0IG9wYWNpdHkgXHQ9IHZhbHVlIC8gMTAwO1xuXG5cdFx0XHRcdCAkKCcuaW5uZXInLHRoaXMpLmNzcyh7J3dpZHRoJzogIGxlZnRPZmZzZXQsIG9wYWNpdHk6IG9wYWNpdHl9KTtcblx0XHRcdCB9KTtcblxuXHRcdFx0IGxldCBza2lsbHNDaGFydCA9IG5ldyBTa2lsbHNDaGFydCgpO1xuXG5cdFx0XHQgc2tpbGxzQ2hhcnQucmVuZGVyKCk7XG5cdFx0fVxuXHR9XG5cblx0ZXhwb3J0IGNsYXNzIEVtYWlsIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ21haWx0bzpcXHUwMDZhXFx1MDA2MVxcdTAwNmRcXHUwMDY1XFx1MDA3M1xcdTAwNDBcXHUwMDZhXFx1MDA2OFxcdTAwNjFcXHUwMDcyXFx1MDA3MlxcdTAwNjlcXHUwMDczXFx1MDAyZVxcdTAwNmVcXHUwMDdhJztcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0XG5cblx0Y2xhc3MgU2tpbGxzQ2hhcnQge1xuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHQvLyBpbml0XG5cdFx0fVxuXG5cdFx0cmVuZGVyKCkge1xuXG5cdFx0XHRsZXQgbWFyZ2lucyA9IDI7XG5cdFx0XHRsZXQgd2lkdGggPSA2NTA7XG5cblx0XHRcdGxldCBzdmcgPSBkMy5zZWxlY3QoXCJzdmcuc2tpbGxzLWNoYXJ0XCIpO1xuXHRcdFx0bGV0IGcgPSBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDIsMilcIik7XG5cdFx0XHRsZXQgZm9ybWF0ID0gZDMuZm9ybWF0KFwiLGRcIik7XG5cblx0XHRcdHZhciBwYWNrID0gZDMucGFjaygpXG5cdFx0XHRcdC5zaXplKFt3aWR0aCAtIDQsIHdpZHRoIC0gNF0pO1xuXG5cdFx0XHRkMy5qc29uKFwiL2pzL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uKGVycm9yOiBhbnksIHJvb3Q6IGFueSkge1xuXG5cdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cm9vdCA9IGQzLmhpZXJhcmNoeShyb290KVxuXHRcdFx0XHRcdC5zdW0oZnVuY3Rpb24oZDogYW55KSB7IHJldHVybiBkLnNpemU7IH0pXG5cdFx0XHRcdFx0LnNvcnQoZnVuY3Rpb24oYTogYW55LCBiOiBhbnkpIHsgcmV0dXJuIGIudmFsdWUgLSBhLnZhbHVlOyB9KTtcblxuXHRcdFx0XHR2YXIgbm9kZSA9IGcuc2VsZWN0QWxsKFwiLm5vZGVcIilcblx0XHRcdFx0XHQuZGF0YShwYWNrKHJvb3QpLmRlc2NlbmRhbnRzKCkpXG5cdFx0XHRcdFx0LmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZDogYW55KSB7IHJldHVybiBkLmNoaWxkcmVuID8gXCJub2RlXCIgOiBcImxlYWYgbm9kZVwiOyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQ6IGFueSkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KTtcblxuXHRcdFx0XHRub2RlLmFwcGVuZChcInRpdGxlXCIpXG5cdFx0XHRcdFx0LnRleHQoZnVuY3Rpb24oZDogYW55KSB7IHJldHVybiBkLmRhdGEubmFtZSArIFwiXFxuXCIgKyBmb3JtYXQoZC52YWx1ZSk7IH0pO1xuXG5cdFx0XHRcdG5vZGUuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQ6IGFueSkgeyByZXR1cm4gZC5yIC0gbWFyZ2luczsgfSk7XG5cblx0XHRcdFx0bm9kZS5maWx0ZXIoZnVuY3Rpb24oZDogYW55KSB7IHJldHVybiAhZC5jaGlsZHJlbjsgfSkuYXBwZW5kKFwidGV4dFwiKVxuXHRcdFx0XHRcdC5hdHRyKFwiZHlcIiwgXCIwLjNlbVwiKVxuXHRcdFx0XHRcdC50ZXh0KGZ1bmN0aW9uKGQ6IGFueSkgeyByZXR1cm4gZC5kYXRhLm5hbWUuc3Vic3RyaW5nKDAsIGQuciAvIDMpOyB9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdCQoSW5pdCk7XG59XG4iXX0=
