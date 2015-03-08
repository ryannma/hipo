var A1C_chart_data = [["2 Jan 2014","22 Jan 2014","11 Feb 2014","3 Mar 2014","23 Mar 2014"],[42.08,42.08,53.01,53.01,42.08]]

var glucose_chart_data = [["2 Jan 2014","7 Jan 2014","12 Jan 2014","17 Jan 2014","22 Jan 2014","27 Jan 2014","1 Feb 2014","6 Feb 2014","11 Feb 2014","16 Feb 2014","21 Feb 2014","26 Feb 2014","3 Mar 2014","8 Mar 2014","13 Mar 2014","18 Mar 2014","23 Mar 2014","28 Mar 2014","2 Apr 2014","7 Apr 2014"],[5.61,5.83,5.99,6.05,5.61,5.99,5.61,6.05,5.94,5.99,6.11,6.11,6.11,5.66,6.11,5.94,5.88,5.55,8.16,7.88]]

var HR_chart_data = [["","2 Jan 2014","","","","","","","","","","12 Jan 2014","","","","","","","","","","22 Jan 2014","","","","","","","","","","1 Feb 2014","","","","","","","","","","11 Feb 2014","","","","","","","","","","21 Feb 2014","","","","","","","","","","3 Mar 2014","","","","","","","","","","13 Mar 2014","","","","","","","","","","23 Mar 2014","","","","","","","","","","2 Apr 2014","","","","","","","",""],[81,80,79,80,79,81,79,80,78,77,79,79,80,80,79,79,79,79,78,79,78,77,77,76,77,78,76,77,76,77,76,78,78,78,79,79,79,81,80,81,81,79,81,81,81,80,82,81,81,81,80,79,78,79,79,79,81,83,84,84,82,84,82,82,82,82,81,82,83,81,81,80,81,79,79,81,79,82,81,80,79,81,83,80,79,82,81,79,78,79,80,81,81,81,81,78,81,80,79,80]] ;

var weight_chart_data = [["","2 Jan 2014","","","","","","","","","","8 Jan 2014","","","","","","","","","","17 Jan 2014","","","","","","","","","","24 Jan 2014","","","","","","","","","","2 Feb 2014","","","","","","","","","","11 Feb 2014","","","","","","","","","","21 Feb 2014","","","","","","","","","","27 Feb 2014","","","","","","","","","","4 Mar 2014","","","","","","","","","","9 Mar 2014","","","","","","","",""],[69.9,69.83,69.92,69.85,69.93,69.89,69.96,70.01,70.04,70.07,70.12,70.19,70.22,70.23,70.14,70.05,70.02,69.97,69.89,69.83,69.78,69.69,69.62,69.6,69.61,69.59,69.67,69.63,69.57,69.49,69.55,69.61,69.54,69.45,69.49,69.56,69.56,69.51,69.54,69.55,69.61,69.51,69.55,69.61,69.71,69.72,69.66,69.58,69.67,69.65,69.61,69.69,69.74,69.68,69.76,69.67,69.71,69.72,69.77,69.69,69.74,69.77,69.68,69.62,69.7,69.75,69.8,69.88,69.83,69.9,69.85,69.81,69.74,69.69,69.68,69.77,69.73,69.68,69.71,69.62,69.71,69.61,69.64,69.58,69.63,69.65,69.57,69.52,69.6,69.52,69.58,69.67,69.57,69.61,69.55,69.53,69.48,69.54,69.55,69.59]];

var steps_chart_data = [["2 Jan 2014","22 Jan 2014","11 Feb 2014","3 Mar 2014","23 Mar 2014"],[4208,4208,5301,5301,4208]]

var meanbpm = [["","2 Jan 2014","","","","","","","","","","12 Jan 2014","","","","","","","","","","22 Jan 2014","","","","","","","","","","1 Feb 2014","","","","","","","","","","11 Feb 2014","","","","","","","","","","21 Feb 2014","","","","","","","","","","3 Mar 2014","","","","","","","","","","13 Mar 2014","","","","","","","","","","23 Mar 2014","","","","","","","","","","2 Apr 2014","","","","","","","",""],[89.02,89.33,89.02,87.98,87.67,87.3,87.67,87.98,88.35,88.65,88.35,87.67,87.67,87.98,87.67,87.67,87.98,87.98,87.3,87.3,87.3,86.63,87,87,87.3,87,86.03,86.33,87.3,87.67,87,86.63,87.3,86.33,86.33,85.65,85.35,85.65,84.97,85.35,85.65,85.35,85.35,86.33,86.33,86.63,86.63,86.03,86.63,86.63,86.03,85.35,85.65,86.03,84.97,85.35,86.03,85.35,86.33,87.3,86.33,86.03,85.65,85.35,85.65,84.97,85.35,84.97,84.67,84.67,84.3,84,83.63,83.63,84,83.32,83.63,84.67,84.67,84.97,84.67,85.35,85.65,86.03,85.35,86.33,85.65,86.63,86.33,86.63,86.03,86.33,87.3,87.98,87.3,87.3,87.3,87,86.33,85.65]] ;var sysbpm = [["","2 Jan 2014","","","","","","","","","","12 Jan 2014","","","","","","","","","","22 Jan 2014","","","","","","","","","","1 Feb 2014","","","","","","","","","","11 Feb 2014","","","","","","","","","","21 Feb 2014","","","","","","","","","","3 Mar 2014","","","","","","","","","","13 Mar 2014","","","","","","","","","","23 Mar 2014","","","","","","","","","","2 Apr 2014","","","","","","","",""],[114.97,116.03,114.97,114,113.03,114,113.03,114,114.97,114,113.03,113.03,113.03,111.97,111,111,110.03,110.03,110.03,110.03,110.03,110.03,111,111,111.97,113.03,111.97,111,111.97,113.03,113.03,114,114,113.03,113.03,113.03,114,113.03,113.03,114,113.03,114,114,114.97,114.97,114,114,114,114,114,114,114,114.97,114,113.03,114,114,114,114.97,116.03,114.97,114,114.97,114,114.97,114.97,116.03,114.97,114,114,113.03,111.97,111,111,110.03,110.03,111,111.97,111.97,113.03,111.97,111.97,111,111.97,111.97,113.03,113.03,114,114.97,116.03,116.03,117,117.98,117.98,117.98,117.98,117.98,117,117,117]] ;var diasbpm = [["","2 Jan 2014","","","","","","","","","","12 Jan 2014","","","","","","","","","","22 Jan 2014","","","","","","","","","","1 Feb 2014","","","","","","","","","","11 Feb 2014","","","","","","","","","","21 Feb 2014","","","","","","","","","","3 Mar 2014","","","","","","","","","","13 Mar 2014","","","","","","","","","","23 Mar 2014","","","","","","","","","","2 Apr 2014","","","","","","","",""],[75.98,75.98,75.98,75,75,74.02,75,75,75,75.98,75.98,75,75,75.98,75.98,75.98,77.02,77.02,75.98,75.98,75.98,75,75,75,75,74.02,72.98,74.02,75,75,74.02,72.98,74.02,72.98,72.98,72,71.03,72,71.03,71.03,72,71.03,71.03,72,72,72.98,72.98,72,72.98,72.98,72,71.03,71.03,72,71.03,71.03,72,71.03,72,72.98,72,72,71.03,71.03,71.03,69.97,69.97,69.97,69.97,69.97,69.97,69.97,69.97,69.97,71.03,69.97,69.97,71.03,71.03,71.03,71.03,72,72.98,72.98,72,72.98,72,72.98,72,72,71.03,71.03,72,72.98,72,72,72,72,71.03,69.97]] ;

var bpm_all_data = { labels: meanbpm[0], datasets: [ { label: "Mean BPM", fillColor: "rgba(220,220,220,0.2)", strokeColor: "rgba(220,220,220,1)", pointColor: "rgba(220,220,220,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(220,220,220,1)", data: meanbpm[1] }, { label: "Systolic BPM", fillColor: "rgba(151,187,205,0.2)", strokeColor: "rgba(151,187,205,1)", pointColor: "rgba(151,187,205,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(151,187,205,1)", data: sysbpm[1] }, { label: "Diastolic BPM", fillColor: "rgba(83,255,64,0.2)", strokeColor: "rgba(83,255,64,1)", pointColor: "rgba(83,255,64,1)", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(83,255,64,1)", data: diasbpm[1] } ] };