window = {};
window['examples'] = {
    ex3: {
	data: "@prefix gg: <http://ggplot.org/diamonds/> .\n\
gg:1 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 55;\n\
	 gg:price 326;\n\
	 gg:x 3.95;\n\
	 gg:y 3.98;\n\
	 gg:z 2.43.\n\
gg:2 a gg:Diamond ;\n\
	 gg:carat 0.21;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.8;\n\
	 gg:table 61;\n\
	 gg:price 326;\n\
	 gg:x 3.89;\n\
	 gg:y 3.84;\n\
	 gg:z 2.31.\n\
gg:3 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 56.9;\n\
	 gg:table 65;\n\
	 gg:price 327;\n\
	 gg:x 4.05;\n\
	 gg:y 4.07;\n\
	 gg:z 2.31.\n\
gg:4 a gg:Diamond ;\n\
	 gg:carat 0.29;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 58;\n\
	 gg:price 334;\n\
	 gg:x 4.2;\n\
	 gg:y 4.23;\n\
	 gg:z 2.63.\n\
gg:5 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.3;\n\
	 gg:table 58;\n\
	 gg:price 335;\n\
	 gg:x 4.34;\n\
	 gg:y 4.35;\n\
	 gg:z 2.75.\n\
gg:6 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 57;\n\
	 gg:price 336;\n\
	 gg:x 3.94;\n\
	 gg:y 3.96;\n\
	 gg:z 2.48.\n\
gg:7 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 57;\n\
	 gg:price 336;\n\
	 gg:x 3.95;\n\
	 gg:y 3.98;\n\
	 gg:z 2.47.\n\
gg:8 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 55;\n\
	 gg:price 337;\n\
	 gg:x 4.07;\n\
	 gg:y 4.11;\n\
	 gg:z 2.53.\n\
gg:9 a gg:Diamond ;\n\
	 gg:carat 0.22;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 65.1;\n\
	 gg:table 61;\n\
	 gg:price 337;\n\
	 gg:x 3.87;\n\
	 gg:y 3.78;\n\
	 gg:z 2.49.\n\
gg:10 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.4;\n\
	 gg:table 61;\n\
	 gg:price 338;\n\
	 gg:x 4;\n\
	 gg:y 4.05;\n\
	 gg:z 2.39.\n\
gg:11 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 64;\n\
	 gg:table 55;\n\
	 gg:price 339;\n\
	 gg:x 4.25;\n\
	 gg:y 4.28;\n\
	 gg:z 2.73.\n\
gg:12 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 56;\n\
	 gg:price 340;\n\
	 gg:x 3.93;\n\
	 gg:y 3.9;\n\
	 gg:z 2.46.\n\
gg:13 a gg:Diamond ;\n\
	 gg:carat 0.22;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.4;\n\
	 gg:table 61;\n\
	 gg:price 342;\n\
	 gg:x 3.88;\n\
	 gg:y 3.84;\n\
	 gg:z 2.33.\n\
gg:14 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 54;\n\
	 gg:price 344;\n\
	 gg:x 4.35;\n\
	 gg:y 4.37;\n\
	 gg:z 2.71.\n\
gg:15 a gg:Diamond ;\n\
	 gg:carat 0.2;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.2;\n\
	 gg:table 62;\n\
	 gg:price 345;\n\
	 gg:x 3.79;\n\
	 gg:y 3.75;\n\
	 gg:z 2.27.\n\
gg:16 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 58;\n\
	 gg:price 345;\n\
	 gg:x 4.38;\n\
	 gg:y 4.42;\n\
	 gg:z 2.68.\n\
gg:17 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62;\n\
	 gg:table 54;\n\
	 gg:price 348;\n\
	 gg:x 4.31;\n\
	 gg:y 4.34;\n\
	 gg:z 2.68.\n\
gg:18 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 54;\n\
	 gg:price 351;\n\
	 gg:x 4.23;\n\
	 gg:y 4.29;\n\
	 gg:z 2.7.\n\
gg:19 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.8;\n\
	 gg:table 56;\n\
	 gg:price 351;\n\
	 gg:x 4.23;\n\
	 gg:y 4.26;\n\
	 gg:z 2.71.\n\
gg:20 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 59;\n\
	 gg:price 351;\n\
	 gg:x 4.21;\n\
	 gg:y 4.27;\n\
	 gg:z 2.66.\n\
gg:21 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.3;\n\
	 gg:table 56;\n\
	 gg:price 351;\n\
	 gg:x 4.26;\n\
	 gg:y 4.3;\n\
	 gg:z 2.71.\n\
gg:22 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.8;\n\
	 gg:table 55;\n\
	 gg:price 352;\n\
	 gg:x 3.85;\n\
	 gg:y 3.92;\n\
	 gg:z 2.48.\n\
gg:23 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 353;\n\
	 gg:x 3.94;\n\
	 gg:y 3.96;\n\
	 gg:z 2.41.\n\
gg:24 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.4;\n\
	 gg:table 62;\n\
	 gg:price 353;\n\
	 gg:x 4.39;\n\
	 gg:y 4.43;\n\
	 gg:z 2.62.\n\
gg:25 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 58.1;\n\
	 gg:table 62;\n\
	 gg:price 353;\n\
	 gg:x 4.44;\n\
	 gg:y 4.47;\n\
	 gg:z 2.59.\n\
gg:26 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.4;\n\
	 gg:table 58;\n\
	 gg:price 354;\n\
	 gg:x 3.97;\n\
	 gg:y 4.01;\n\
	 gg:z 2.41.\n\
gg:27 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 355;\n\
	 gg:x 3.97;\n\
	 gg:y 3.94;\n\
	 gg:z 2.47.\n\
gg:28 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 57;\n\
	 gg:price 357;\n\
	 gg:x 4.28;\n\
	 gg:y 4.3;\n\
	 gg:z 2.67.\n\
gg:29 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.5;\n\
	 gg:table 61;\n\
	 gg:price 357;\n\
	 gg:x 3.96;\n\
	 gg:y 3.97;\n\
	 gg:z 2.4.\n\
gg:30 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 357;\n\
	 gg:x 3.96;\n\
	 gg:y 3.99;\n\
	 gg:z 2.42.\n\
gg:31 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60;\n\
	 gg:table 57;\n\
	 gg:price 402;\n\
	 gg:x 4;\n\
	 gg:y 4.03;\n\
	 gg:z 2.41.\n\
gg:32 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.8;\n\
	 gg:table 57;\n\
	 gg:price 402;\n\
	 gg:x 4.04;\n\
	 gg:y 4.06;\n\
	 gg:z 2.42.\n\
gg:33 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 59;\n\
	 gg:price 402;\n\
	 gg:x 3.97;\n\
	 gg:y 4.01;\n\
	 gg:z 2.42.\n\
gg:34 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.5;\n\
	 gg:table 58;\n\
	 gg:price 402;\n\
	 gg:x 4.01;\n\
	 gg:y 4.06;\n\
	 gg:z 2.4.\n\
gg:35 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 58;\n\
	 gg:price 402;\n\
	 gg:x 3.92;\n\
	 gg:y 3.96;\n\
	 gg:z 2.44.\n\
gg:36 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 58.2;\n\
	 gg:table 59;\n\
	 gg:price 402;\n\
	 gg:x 4.06;\n\
	 gg:y 4.08;\n\
	 gg:z 2.37.\n\
gg:37 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 64.1;\n\
	 gg:table 59;\n\
	 gg:price 402;\n\
	 gg:x 3.83;\n\
	 gg:y 3.85;\n\
	 gg:z 2.46.\n\
gg:38 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 64;\n\
	 gg:table 54;\n\
	 gg:price 402;\n\
	 gg:x 4.29;\n\
	 gg:y 4.31;\n\
	 gg:z 2.75.\n\
gg:39 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.8;\n\
	 gg:table 59;\n\
	 gg:price 403;\n\
	 gg:x 4.13;\n\
	 gg:y 4.16;\n\
	 gg:z 2.52.\n\
gg:40 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 55;\n\
	 gg:price 403;\n\
	 gg:x 4.49;\n\
	 gg:y 4.51;\n\
	 gg:z 2.78.\n\
gg:41 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.2;\n\
	 gg:table 56;\n\
	 gg:price 403;\n\
	 gg:x 4.49;\n\
	 gg:y 4.5;\n\
	 gg:z 2.75.\n\
gg:42 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.1;\n\
	 gg:table 56;\n\
	 gg:price 403;\n\
	 gg:x 4.49;\n\
	 gg:y 4.55;\n\
	 gg:z 2.76.\n\
gg:43 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 65.2;\n\
	 gg:table 56;\n\
	 gg:price 403;\n\
	 gg:x 3.99;\n\
	 gg:y 4.02;\n\
	 gg:z 2.61.\n\
gg:44 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 58.4;\n\
	 gg:table 63;\n\
	 gg:price 403;\n\
	 gg:x 4.19;\n\
	 gg:y 4.24;\n\
	 gg:z 2.46.\n\
gg:45 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.1;\n\
	 gg:table 56;\n\
	 gg:price 403;\n\
	 gg:x 4.34;\n\
	 gg:y 4.37;\n\
	 gg:z 2.75.\n\
gg:46 a gg:Diamond ;\n\
	 gg:carat 0.29;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 58;\n\
	 gg:price 403;\n\
	 gg:x 4.24;\n\
	 gg:y 4.26;\n\
	 gg:z 2.65.\n\
gg:47 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 55;\n\
	 gg:price 403;\n\
	 gg:x 4.35;\n\
	 gg:y 4.42;\n\
	 gg:z 2.71.\n\
gg:48 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.8;\n\
	 gg:table 56;\n\
	 gg:price 403;\n\
	 gg:x 4.36;\n\
	 gg:y 4.38;\n\
	 gg:z 2.79.\n\
gg:49 a gg:Diamond ;\n\
	 gg:carat 0.25;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.3;\n\
	 gg:table 60;\n\
	 gg:price 404;\n\
	 gg:x 4;\n\
	 gg:y 4.03;\n\
	 gg:z 2.54.\n\
gg:50 a gg:Diamond ;\n\
	 gg:carat 0.29;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 60;\n\
	 gg:price 404;\n\
	 gg:x 4.33;\n\
	 gg:y 4.37;\n\
	 gg:z 2.64.\n\
gg:51 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 61;\n\
	 gg:price 404;\n\
	 gg:x 4.02;\n\
	 gg:y 4.03;\n\
	 gg:z 2.45.\n\
gg:52 a gg:Diamond ;\n\
	 gg:carat 0.23;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 54;\n\
	 gg:price 404;\n\
	 gg:x 3.93;\n\
	 gg:y 3.95;\n\
	 gg:z 2.44.\n\
gg:53 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 55;\n\
	 gg:price 404;\n\
	 gg:x 4.45;\n\
	 gg:y 4.48;\n\
	 gg:z 2.72.\n\
gg:54 a gg:Diamond ;\n\
	 gg:carat 0.22;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 58;\n\
	 gg:price 404;\n\
	 gg:x 3.93;\n\
	 gg:y 3.89;\n\
	 gg:z 2.41.\n\
gg:55 a gg:Diamond ;\n\
	 gg:carat 0.22;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.3;\n\
	 gg:table 62;\n\
	 gg:price 404;\n\
	 gg:x 3.91;\n\
	 gg:y 3.88;\n\
	 gg:z 2.31.\n\
gg:56 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61;\n\
	 gg:table 59;\n\
	 gg:price 405;\n\
	 gg:x 4.3;\n\
	 gg:y 4.33;\n\
	 gg:z 2.63.\n\
gg:57 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.3;\n\
	 gg:table 61;\n\
	 gg:price 405;\n\
	 gg:x 4.43;\n\
	 gg:y 4.38;\n\
	 gg:z 2.61.\n\
gg:58 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 57;\n\
	 gg:price 405;\n\
	 gg:x 4.25;\n\
	 gg:y 4.28;\n\
	 gg:z 2.67.\n\
gg:59 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63;\n\
	 gg:table 57;\n\
	 gg:price 405;\n\
	 gg:x 4.28;\n\
	 gg:y 4.32;\n\
	 gg:z 2.71.\n\
gg:60 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 55;\n\
	 gg:price 405;\n\
	 gg:x 4.25;\n\
	 gg:y 4.29;\n\
	 gg:z 2.7.\n\
gg:61 a gg:Diamond ;\n\
	 gg:carat 0.35;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 552;\n\
	 gg:x 4.54;\n\
	 gg:y 4.59;\n\
	 gg:z 2.78.\n\
gg:62 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 59;\n\
	 gg:price 552;\n\
	 gg:x 4.23;\n\
	 gg:y 4.27;\n\
	 gg:z 2.66.\n\
gg:63 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 552;\n\
	 gg:x 4.29;\n\
	 gg:y 4.32;\n\
	 gg:z 2.69.\n\
gg:64 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 56;\n\
	 gg:price 552;\n\
	 gg:x 4.3;\n\
	 gg:y 4.33;\n\
	 gg:z 2.68.\n\
gg:65 a gg:Diamond ;\n\
	 gg:carat 0.42;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 59;\n\
	 gg:price 552;\n\
	 gg:x 4.78;\n\
	 gg:y 4.84;\n\
	 gg:z 2.96.\n\
gg:66 a gg:Diamond ;\n\
	 gg:carat 0.28;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 56;\n\
	 gg:price 553;\n\
	 gg:x 4.19;\n\
	 gg:y 4.22;\n\
	 gg:z 2.58.\n\
gg:67 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62;\n\
	 gg:table 55.3;\n\
	 gg:price 553;\n\
	 gg:x 4.39;\n\
	 gg:y 4.42;\n\
	 gg:z 2.73.\n\
gg:68 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.3;\n\
	 gg:table 57;\n\
	 gg:price 553;\n\
	 gg:x 4.33;\n\
	 gg:y 4.3;\n\
	 gg:z 2.73.\n\
gg:69 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 58;\n\
	 gg:price 553;\n\
	 gg:x 4.35;\n\
	 gg:y 4.32;\n\
	 gg:z 2.68.\n\
gg:70 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 58;\n\
	 gg:price 553;\n\
	 gg:x 4.01;\n\
	 gg:y 4.03;\n\
	 gg:z 2.44.\n\
gg:71 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 60;\n\
	 gg:price 553;\n\
	 gg:x 3.97;\n\
	 gg:y 4;\n\
	 gg:z 2.45.\n\
gg:72 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 56;\n\
	 gg:price 554;\n\
	 gg:x 4.29;\n\
	 gg:y 4.27;\n\
	 gg:z 2.7.\n\
gg:73 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 59;\n\
	 gg:price 554;\n\
	 gg:x 4.28;\n\
	 gg:y 4.24;\n\
	 gg:z 2.68.\n\
gg:74 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 554;\n\
	 gg:x 4.29;\n\
	 gg:y 4.25;\n\
	 gg:z 2.67.\n\
gg:75 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.7;\n\
	 gg:table 57;\n\
	 gg:price 554;\n\
	 gg:x 4.28;\n\
	 gg:y 4.26;\n\
	 gg:z 2.72.\n\
gg:76 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 59.2;\n\
	 gg:table 60;\n\
	 gg:price 554;\n\
	 gg:x 4.19;\n\
	 gg:y 4.22;\n\
	 gg:z 2.49.\n\
gg:77 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 59.9;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.15;\n\
	 gg:y 4.23;\n\
	 gg:z 2.51.\n\
gg:78 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 54;\n\
	 gg:price 554;\n\
	 gg:x 4.08;\n\
	 gg:y 4.13;\n\
	 gg:z 2.56.\n\
gg:79 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 60;\n\
	 gg:price 554;\n\
	 gg:x 4.01;\n\
	 gg:y 4.05;\n\
	 gg:z 2.53.\n\
gg:80 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 59;\n\
	 gg:price 554;\n\
	 gg:x 4.06;\n\
	 gg:y 4.09;\n\
	 gg:z 2.55.\n\
gg:81 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 59;\n\
	 gg:price 554;\n\
	 gg:x 4;\n\
	 gg:y 4.04;\n\
	 gg:z 2.55.\n\
gg:82 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 60;\n\
	 gg:price 554;\n\
	 gg:x 4.03;\n\
	 gg:y 4.12;\n\
	 gg:z 2.53.\n\
gg:83 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.9;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.02;\n\
	 gg:y 4.06;\n\
	 gg:z 2.54.\n\
gg:84 a gg:Diamond ;\n\
	 gg:carat 0.38;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 554;\n\
	 gg:x 4.65;\n\
	 gg:y 4.67;\n\
	 gg:z 2.87.\n\
gg:85 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 57.9;\n\
	 gg:table 60;\n\
	 gg:price 554;\n\
	 gg:x 4.22;\n\
	 gg:y 4.25;\n\
	 gg:z 2.45.\n\
gg:86 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 59;\n\
	 gg:price 554;\n\
	 gg:x 3.95;\n\
	 gg:y 3.92;\n\
	 gg:z 2.45.\n\
gg:87 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.01;\n\
	 gg:y 3.96;\n\
	 gg:z 2.44.\n\
gg:88 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 59;\n\
	 gg:price 554;\n\
	 gg:x 4.02;\n\
	 gg:y 4;\n\
	 gg:z 2.44.\n\
gg:89 a gg:Diamond ;\n\
	 gg:carat 0.24;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.07;\n\
	 gg:y 4.04;\n\
	 gg:z 2.46.\n\
gg:90 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.35;\n\
	 gg:y 4.33;\n\
	 gg:z 2.73.\n\
gg:91 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2757;\n\
	 gg:x 5.7;\n\
	 gg:y 5.72;\n\
	 gg:z 3.57.\n\
gg:92 a gg:Diamond ;\n\
	 gg:carat 0.86;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 55.1;\n\
	 gg:table 69;\n\
	 gg:price 2757;\n\
	 gg:x 6.45;\n\
	 gg:y 6.33;\n\
	 gg:z 3.52.\n\
gg:93 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2757;\n\
	 gg:x 5.7;\n\
	 gg:y 5.67;\n\
	 gg:z 3.5.\n\
gg:94 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 57;\n\
	 gg:price 2759;\n\
	 gg:x 5.68;\n\
	 gg:y 5.73;\n\
	 gg:z 3.56.\n\
gg:95 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.8;\n\
	 gg:table 56;\n\
	 gg:price 2759;\n\
	 gg:x 5.81;\n\
	 gg:y 5.85;\n\
	 gg:z 3.72.\n\
gg:96 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 57.5;\n\
	 gg:table 58;\n\
	 gg:price 2759;\n\
	 gg:x 5.85;\n\
	 gg:y 5.9;\n\
	 gg:z 3.38.\n\
gg:97 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.4;\n\
	 gg:table 62;\n\
	 gg:price 2759;\n\
	 gg:x 5.71;\n\
	 gg:y 5.76;\n\
	 gg:z 3.4.\n\
gg:98 a gg:Diamond ;\n\
	 gg:carat 0.96;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 66.3;\n\
	 gg:table 62;\n\
	 gg:price 2759;\n\
	 gg:x 6.27;\n\
	 gg:y 5.95;\n\
	 gg:z 4.07.\n\
gg:99 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 59;\n\
	 gg:price 2760;\n\
	 gg:x 5.77;\n\
	 gg:y 5.78;\n\
	 gg:z 3.56.\n\
gg:100 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 58;\n\
	 gg:price 2760;\n\
	 gg:x 5.97;\n\
	 gg:y 5.93;\n\
	 gg:z 3.66.\n\
gg:101 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 56;\n\
	 gg:price 2760;\n\
	 gg:x 5.8;\n\
	 gg:y 5.75;\n\
	 gg:z 3.65.\n\
gg:102 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.9;\n\
	 gg:table 54;\n\
	 gg:price 2760;\n\
	 gg:x 6;\n\
	 gg:y 5.96;\n\
	 gg:z 3.58.\n\
gg:103 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 55;\n\
	 gg:price 2760;\n\
	 gg:x 5.8;\n\
	 gg:y 5.85;\n\
	 gg:z 3.59.\n\
gg:104 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 58;\n\
	 gg:price 2760;\n\
	 gg:x 5.85;\n\
	 gg:y 5.79;\n\
	 gg:z 3.59.\n\
gg:105 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 56;\n\
	 gg:price 2760;\n\
	 gg:x 5.94;\n\
	 gg:y 5.87;\n\
	 gg:z 3.72.\n\
gg:106 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 55;\n\
	 gg:price 2760;\n\
	 gg:x 5.87;\n\
	 gg:y 5.8;\n\
	 gg:z 3.63.\n\
gg:107 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63;\n\
	 gg:table 59;\n\
	 gg:price 2760;\n\
	 gg:x 5.9;\n\
	 gg:y 5.81;\n\
	 gg:z 3.69.\n\
gg:108 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 55;\n\
	 gg:price 2761;\n\
	 gg:x 5.77;\n\
	 gg:y 5.81;\n\
	 gg:z 3.61.\n\
gg:109 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 58.8;\n\
	 gg:table 57;\n\
	 gg:price 2761;\n\
	 gg:x 6.14;\n\
	 gg:y 6.11;\n\
	 gg:z 3.6.\n\
gg:110 a gg:Diamond ;\n\
	 gg:carat 0.59;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62;\n\
	 gg:table 55;\n\
	 gg:price 2761;\n\
	 gg:x 5.38;\n\
	 gg:y 5.43;\n\
	 gg:z 3.35.\n\
gg:111 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 57;\n\
	 gg:price 2761;\n\
	 gg:x 5.96;\n\
	 gg:y 6;\n\
	 gg:z 3.67.\n\
gg:112 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 56;\n\
	 gg:price 2761;\n\
	 gg:x 5.8;\n\
	 gg:y 5.84;\n\
	 gg:z 3.62.\n\
gg:113 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63;\n\
	 gg:table 58;\n\
	 gg:price 2761;\n\
	 gg:x 6.16;\n\
	 gg:y 6.12;\n\
	 gg:z 3.87.\n\
gg:114 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 59;\n\
	 gg:price 2762;\n\
	 gg:x 5.73;\n\
	 gg:y 5.82;\n\
	 gg:z 3.59.\n\
gg:115 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 56;\n\
	 gg:price 2762;\n\
	 gg:x 5.77;\n\
	 gg:y 5.74;\n\
	 gg:z 3.6.\n\
gg:116 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 53;\n\
	 gg:price 2762;\n\
	 gg:x 5.8;\n\
	 gg:y 5.75;\n\
	 gg:z 3.62.\n\
gg:117 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 58;\n\
	 gg:price 2762;\n\
	 gg:x 5.98;\n\
	 gg:y 5.94;\n\
	 gg:z 3.68.\n\
gg:118 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 54;\n\
	 gg:price 2762;\n\
	 gg:x 5.72;\n\
	 gg:y 5.76;\n\
	 gg:z 3.58.\n\
gg:119 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 58;\n\
	 gg:price 2762;\n\
	 gg:x 5.73;\n\
	 gg:y 5.76;\n\
	 gg:z 3.49.\n\
gg:120 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.9;\n\
	 gg:table 59;\n\
	 gg:price 2762;\n\
	 gg:x 6.01;\n\
	 gg:y 6.07;\n\
	 gg:z 3.62.\n\
gg:121 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 56;\n\
	 gg:price 2762;\n\
	 gg:x 5.73;\n\
	 gg:y 5.69;\n\
	 gg:z 3.56.\n\
gg:122 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 54;\n\
	 gg:price 2762;\n\
	 gg:x 5.8;\n\
	 gg:y 5.83;\n\
	 gg:z 3.62.\n\
gg:123 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 63;\n\
	 gg:price 2762;\n\
	 gg:x 5.64;\n\
	 gg:y 5.61;\n\
	 gg:z 3.47.\n\
gg:124 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.5;\n\
	 gg:table 57;\n\
	 gg:price 2762;\n\
	 gg:x 5.57;\n\
	 gg:y 5.53;\n\
	 gg:z 3.58.\n\
gg:125 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 65.3;\n\
	 gg:table 55;\n\
	 gg:price 2762;\n\
	 gg:x 5.63;\n\
	 gg:y 5.58;\n\
	 gg:z 3.66.\n\
gg:126 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 60;\n\
	 gg:price 2762;\n\
	 gg:x 5.65;\n\
	 gg:y 5.59;\n\
	 gg:z 3.46.\n\
gg:127 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 56;\n\
	 gg:price 2763;\n\
	 gg:x 6.09;\n\
	 gg:y 5.97;\n\
	 gg:z 3.7.\n\
gg:128 a gg:Diamond ;\n\
	 gg:carat 0.61;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 59.6;\n\
	 gg:table 57;\n\
	 gg:price 2763;\n\
	 gg:x 5.56;\n\
	 gg:y 5.58;\n\
	 gg:z 3.32.\n\
gg:129 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 64.4;\n\
	 gg:table 57;\n\
	 gg:price 2763;\n\
	 gg:x 6.11;\n\
	 gg:y 6.09;\n\
	 gg:z 3.93.\n\
gg:130 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 65.7;\n\
	 gg:table 60;\n\
	 gg:price 2763;\n\
	 gg:x 6.03;\n\
	 gg:y 5.99;\n\
	 gg:z 3.95.\n\
gg:131 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62;\n\
	 gg:table 56;\n\
	 gg:price 2763;\n\
	 gg:x 5.89;\n\
	 gg:y 5.86;\n\
	 gg:z 3.64.\n\
gg:132 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.6;\n\
	 gg:table 58;\n\
	 gg:price 2764;\n\
	 gg:x 5.64;\n\
	 gg:y 5.68;\n\
	 gg:z 3.6.\n\
gg:133 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 59;\n\
	 gg:price 2764;\n\
	 gg:x 5.69;\n\
	 gg:y 5.72;\n\
	 gg:z 3.53.\n\
gg:134 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 60;\n\
	 gg:price 2765;\n\
	 gg:x 5.62;\n\
	 gg:y 5.65;\n\
	 gg:z 3.53.\n\
gg:135 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 60;\n\
	 gg:price 2765;\n\
	 gg:x 5.88;\n\
	 gg:y 5.9;\n\
	 gg:z 3.61.\n\
gg:136 a gg:Diamond ;\n\
	 gg:carat 0.63;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 60;\n\
	 gg:price 2765;\n\
	 gg:x 5.52;\n\
	 gg:y 5.55;\n\
	 gg:z 3.37.\n\
gg:137 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.1;\n\
	 gg:table 62;\n\
	 gg:price 2765;\n\
	 gg:x 5.74;\n\
	 gg:y 5.77;\n\
	 gg:z 3.46.\n\
gg:138 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 59;\n\
	 gg:price 2765;\n\
	 gg:x 5.69;\n\
	 gg:y 5.73;\n\
	 gg:z 3.53.\n\
gg:139 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 57;\n\
	 gg:price 2765;\n\
	 gg:x 5.88;\n\
	 gg:y 5.91;\n\
	 gg:z 3.61.\n\
gg:140 a gg:Diamond ;\n\
	 gg:carat 0.64;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 56;\n\
	 gg:price 2766;\n\
	 gg:x 5.53;\n\
	 gg:y 5.56;\n\
	 gg:z 3.43.\n\
gg:141 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 2766;\n\
	 gg:x 5.78;\n\
	 gg:y 5.75;\n\
	 gg:z 3.51.\n\
gg:142 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.8;\n\
	 gg:table 56;\n\
	 gg:price 2766;\n\
	 gg:x 5.89;\n\
	 gg:y 5.81;\n\
	 gg:z 3.5.\n\
gg:143 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 55;\n\
	 gg:price 2767;\n\
	 gg:x 5.68;\n\
	 gg:y 5.72;\n\
	 gg:z 3.52.\n\
gg:144 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60;\n\
	 gg:table 57;\n\
	 gg:price 2767;\n\
	 gg:x 5.8;\n\
	 gg:y 5.87;\n\
	 gg:z 3.5.\n\
gg:145 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 55;\n\
	 gg:price 2767;\n\
	 gg:x 5.74;\n\
	 gg:y 5.76;\n\
	 gg:z 3.54.\n\
gg:146 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 64;\n\
	 gg:price 2767;\n\
	 gg:x 5.62;\n\
	 gg:y 5.65;\n\
	 gg:z 3.5.\n\
gg:147 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.3;\n\
	 gg:table 59;\n\
	 gg:price 2768;\n\
	 gg:x 5.52;\n\
	 gg:y 5.61;\n\
	 gg:z 3.52.\n\
gg:148 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.2;\n\
	 gg:table 56;\n\
	 gg:price 2768;\n\
	 gg:x 5.83;\n\
	 gg:y 5.87;\n\
	 gg:z 3.52.\n\
gg:149 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.1;\n\
	 gg:table 58;\n\
	 gg:price 2768;\n\
	 gg:x 5.66;\n\
	 gg:y 5.73;\n\
	 gg:z 3.48.\n\
gg:150 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 2768;\n\
	 gg:x 5.73;\n\
	 gg:y 5.76;\n\
	 gg:z 3.5.\n\
gg:151 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 59;\n\
	 gg:price 2768;\n\
	 gg:x 5.71;\n\
	 gg:y 5.67;\n\
	 gg:z 3.51.\n\
gg:152 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2769;\n\
	 gg:x 5.82;\n\
	 gg:y 5.86;\n\
	 gg:z 3.57.\n\
gg:153 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 60;\n\
	 gg:price 2770;\n\
	 gg:x 5.65;\n\
	 gg:y 5.61;\n\
	 gg:z 3.52.\n\
gg:154 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 59;\n\
	 gg:price 2770;\n\
	 gg:x 5.83;\n\
	 gg:y 5.76;\n\
	 gg:z 3.56.\n\
gg:155 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 57;\n\
	 gg:price 2770;\n\
	 gg:x 5.79;\n\
	 gg:y 5.81;\n\
	 gg:z 3.65.\n\
gg:156 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 57;\n\
	 gg:price 2770;\n\
	 gg:x 5.78;\n\
	 gg:y 5.83;\n\
	 gg:z 3.62.\n\
gg:157 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2770;\n\
	 gg:x 5.77;\n\
	 gg:y 5.8;\n\
	 gg:z 3.51.\n\
gg:158 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 58;\n\
	 gg:price 2770;\n\
	 gg:x 5.87;\n\
	 gg:y 5.82;\n\
	 gg:z 3.55.\n\
gg:159 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 58;\n\
	 gg:price 2770;\n\
	 gg:x 5.79;\n\
	 gg:y 5.75;\n\
	 gg:z 3.55.\n\
gg:160 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.9;\n\
	 gg:table 57;\n\
	 gg:price 2770;\n\
	 gg:x 5.92;\n\
	 gg:y 5.89;\n\
	 gg:z 3.54.\n\
gg:161 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.2;\n\
	 gg:table 59;\n\
	 gg:price 2770;\n\
	 gg:x 5.92;\n\
	 gg:y 5.87;\n\
	 gg:z 3.49.\n\
gg:162 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.3;\n\
	 gg:table 56;\n\
	 gg:price 2771;\n\
	 gg:x 5.81;\n\
	 gg:y 5.83;\n\
	 gg:z 3.51.\n\
gg:163 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 60;\n\
	 gg:price 2771;\n\
	 gg:x 5.79;\n\
	 gg:y 5.82;\n\
	 gg:z 3.58.\n\
gg:164 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 57;\n\
	 gg:price 2771;\n\
	 gg:x 5.73;\n\
	 gg:y 5.77;\n\
	 gg:z 3.56.\n\
gg:165 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 55;\n\
	 gg:price 2771;\n\
	 gg:x 5.97;\n\
	 gg:y 5.92;\n\
	 gg:z 3.68.\n\
gg:166 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.4;\n\
	 gg:table 59;\n\
	 gg:price 2772;\n\
	 gg:x 5.83;\n\
	 gg:y 5.89;\n\
	 gg:z 3.54.\n\
gg:167 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2772;\n\
	 gg:x 6.01;\n\
	 gg:y 6.03;\n\
	 gg:z 3.67.\n\
gg:168 a gg:Diamond ;\n\
	 gg:carat 0.58;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 55;\n\
	 gg:price 2772;\n\
	 gg:x 5.39;\n\
	 gg:y 5.44;\n\
	 gg:z 3.33.\n\
gg:169 a gg:Diamond ;\n\
	 gg:carat 0.58;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 56;\n\
	 gg:price 2772;\n\
	 gg:x 5.33;\n\
	 gg:y 5.37;\n\
	 gg:z 3.3.\n\
gg:170 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.2;\n\
	 gg:table 61;\n\
	 gg:price 2772;\n\
	 gg:x 5.8;\n\
	 gg:y 5.88;\n\
	 gg:z 3.46.\n\
gg:171 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2773;\n\
	 gg:x 5.85;\n\
	 gg:y 5.89;\n\
	 gg:z 3.6.\n\
gg:172 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58;\n\
	 gg:table 62;\n\
	 gg:price 2773;\n\
	 gg:x 5.87;\n\
	 gg:y 5.78;\n\
	 gg:z 3.38.\n\
gg:173 a gg:Diamond ;\n\
	 gg:carat 1.17;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.2;\n\
	 gg:table 61;\n\
	 gg:price 2774;\n\
	 gg:x 6.83;\n\
	 gg:y 6.9;\n\
	 gg:z 4.13.\n\
gg:174 a gg:Diamond ;\n\
	 gg:carat 0.6;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 55;\n\
	 gg:price 2774;\n\
	 gg:x 5.41;\n\
	 gg:y 5.44;\n\
	 gg:z 3.35.\n\
gg:175 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 55;\n\
	 gg:price 2774;\n\
	 gg:x 5.68;\n\
	 gg:y 5.74;\n\
	 gg:z 3.58.\n\
gg:176 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.6;\n\
	 gg:table 54;\n\
	 gg:price 2774;\n\
	 gg:x 5.85;\n\
	 gg:y 5.88;\n\
	 gg:z 3.79.\n\
gg:177 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 61;\n\
	 gg:price 2775;\n\
	 gg:x 5.8;\n\
	 gg:y 5.84;\n\
	 gg:z 3.57.\n\
gg:178 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.7;\n\
	 gg:table 56.4;\n\
	 gg:price 2776;\n\
	 gg:x 5.62;\n\
	 gg:y 5.69;\n\
	 gg:z 3.61.\n\
gg:179 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 58;\n\
	 gg:price 2776;\n\
	 gg:x 5.74;\n\
	 gg:y 5.68;\n\
	 gg:z 3.58.\n\
gg:180 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 57;\n\
	 gg:price 2776;\n\
	 gg:x 5.79;\n\
	 gg:y 5.62;\n\
	 gg:z 3.55.\n\
gg:181 a gg:Diamond ;\n\
	 gg:carat 0.54;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2776;\n\
	 gg:x 5.25;\n\
	 gg:y 5.27;\n\
	 gg:z 3.24.\n\
gg:182 a gg:Diamond ;\n\
	 gg:carat 0.54;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 57;\n\
	 gg:price 2776;\n\
	 gg:x 5.24;\n\
	 gg:y 5.26;\n\
	 gg:z 3.23.\n\
gg:183 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2776;\n\
	 gg:x 5.72;\n\
	 gg:y 5.75;\n\
	 gg:z 3.55.\n\
gg:184 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2776;\n\
	 gg:x 5.79;\n\
	 gg:y 5.82;\n\
	 gg:z 3.53.\n\
gg:185 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.7;\n\
	 gg:table 60.5;\n\
	 gg:price 2776;\n\
	 gg:x 5.8;\n\
	 gg:y 5.84;\n\
	 gg:z 3.47.\n\
gg:186 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.5;\n\
	 gg:table 56;\n\
	 gg:price 2776;\n\
	 gg:x 5.8;\n\
	 gg:y 5.76;\n\
	 gg:z 3.5.\n\
gg:187 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 58;\n\
	 gg:price 2777;\n\
	 gg:x 5.66;\n\
	 gg:y 5.73;\n\
	 gg:z 3.57.\n\
gg:188 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 58;\n\
	 gg:price 2777;\n\
	 gg:x 5.67;\n\
	 gg:y 5.7;\n\
	 gg:z 3.53.\n\
gg:189 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 57;\n\
	 gg:price 2777;\n\
	 gg:x 5.64;\n\
	 gg:y 5.69;\n\
	 gg:z 3.56.\n\
gg:190 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.8;\n\
	 gg:table 58;\n\
	 gg:price 2777;\n\
	 gg:x 5.61;\n\
	 gg:y 5.64;\n\
	 gg:z 3.59.\n\
gg:191 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 57.8;\n\
	 gg:table 60;\n\
	 gg:price 2777;\n\
	 gg:x 5.87;\n\
	 gg:y 5.9;\n\
	 gg:z 3.4.\n\
gg:192 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 55;\n\
	 gg:price 2777;\n\
	 gg:x 5.7;\n\
	 gg:y 5.67;\n\
	 gg:z 3.53.\n\
gg:193 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.1;\n\
	 gg:table 60;\n\
	 gg:price 2777;\n\
	 gg:x 5.71;\n\
	 gg:y 5.64;\n\
	 gg:z 3.47.\n\
gg:194 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60;\n\
	 gg:table 59;\n\
	 gg:price 2777;\n\
	 gg:x 5.79;\n\
	 gg:y 5.75;\n\
	 gg:z 3.46.\n\
gg:195 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 57;\n\
	 gg:price 2777;\n\
	 gg:x 5.73;\n\
	 gg:y 5.68;\n\
	 gg:z 3.49.\n\
gg:196 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 59;\n\
	 gg:price 2777;\n\
	 gg:x 5.67;\n\
	 gg:y 5.63;\n\
	 gg:z 3.54.\n\
gg:197 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2777;\n\
	 gg:x 5.73;\n\
	 gg:y 5.68;\n\
	 gg:z 3.48.\n\
gg:198 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 58;\n\
	 gg:price 2777;\n\
	 gg:x 5.78;\n\
	 gg:y 5.72;\n\
	 gg:z 3.51.\n\
gg:199 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 57;\n\
	 gg:price 2777;\n\
	 gg:x 5.76;\n\
	 gg:y 5.7;\n\
	 gg:z 3.52.\n\
gg:200 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 61;\n\
	 gg:price 2777;\n\
	 gg:x 5.82;\n\
	 gg:y 5.71;\n\
	 gg:z 3.56.\n\
gg:201 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.9;\n\
	 gg:table 63;\n\
	 gg:price 2777;\n\
	 gg:x 5.76;\n\
	 gg:y 5.7;\n\
	 gg:z 3.43.\n\
gg:202 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 58;\n\
	 gg:price 2777;\n\
	 gg:x 5.71;\n\
	 gg:y 5.68;\n\
	 gg:z 3.49.\n\
gg:203 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.5;\n\
	 gg:table 58;\n\
	 gg:price 2777;\n\
	 gg:x 5.77;\n\
	 gg:y 5.74;\n\
	 gg:z 3.48.\n\
gg:204 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.1;\n\
	 gg:table 59;\n\
	 gg:price 2777;\n\
	 gg:x 5.64;\n\
	 gg:y 5.59;\n\
	 gg:z 3.6.\n\
gg:205 a gg:Diamond ;\n\
	 gg:carat 0.98;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 67.9;\n\
	 gg:table 60;\n\
	 gg:price 2777;\n\
	 gg:x 6.05;\n\
	 gg:y 5.97;\n\
	 gg:z 4.08.\n\
gg:206 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 58;\n\
	 gg:price 2777;\n\
	 gg:x 5.83;\n\
	 gg:y 5.8;\n\
	 gg:z 3.63.\n\
gg:207 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 60;\n\
	 gg:price 2777;\n\
	 gg:x 5.6;\n\
	 gg:y 5.51;\n\
	 gg:z 3.51.\n\
gg:208 a gg:Diamond ;\n\
	 gg:carat 0.52;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 55;\n\
	 gg:price 2778;\n\
	 gg:x 5.19;\n\
	 gg:y 5.22;\n\
	 gg:z 3.19.\n\
gg:209 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.8;\n\
	 gg:table 56;\n\
	 gg:price 2779;\n\
	 gg:x 5.82;\n\
	 gg:y 5.84;\n\
	 gg:z 3.55.\n\
gg:210 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 56;\n\
	 gg:price 2779;\n\
	 gg:x 5.84;\n\
	 gg:y 5.8;\n\
	 gg:z 3.59.\n\
gg:211 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.6;\n\
	 gg:table 57;\n\
	 gg:price 2780;\n\
	 gg:x 5.61;\n\
	 gg:y 5.65;\n\
	 gg:z 3.58.\n\
gg:212 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.2;\n\
	 gg:table 58;\n\
	 gg:price 2780;\n\
	 gg:x 5.9;\n\
	 gg:y 5.93;\n\
	 gg:z 3.62.\n\
gg:213 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 54;\n\
	 gg:price 2780;\n\
	 gg:x 5.68;\n\
	 gg:y 5.72;\n\
	 gg:z 3.54.\n\
gg:214 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 55;\n\
	 gg:price 2780;\n\
	 gg:x 5.81;\n\
	 gg:y 5.86;\n\
	 gg:z 3.59.\n\
gg:215 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 59;\n\
	 gg:price 2780;\n\
	 gg:x 5.64;\n\
	 gg:y 5.73;\n\
	 gg:z 3.49.\n\
gg:216 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 60;\n\
	 gg:price 2781;\n\
	 gg:x 6.39;\n\
	 gg:y 6.36;\n\
	 gg:z 3.94.\n\
gg:217 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 56;\n\
	 gg:price 2781;\n\
	 gg:x 5.83;\n\
	 gg:y 5.88;\n\
	 gg:z 3.64.\n\
gg:218 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 56;\n\
	 gg:price 2781;\n\
	 gg:x 5.92;\n\
	 gg:y 5.99;\n\
	 gg:z 3.64.\n\
gg:219 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.6;\n\
	 gg:table 63;\n\
	 gg:price 2782;\n\
	 gg:x 5.83;\n\
	 gg:y 5.76;\n\
	 gg:z 3.51.\n\
gg:220 a gg:Diamond ;\n\
	 gg:carat 0.53;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 57.5;\n\
	 gg:table 64;\n\
	 gg:price 2782;\n\
	 gg:x 5.34;\n\
	 gg:y 5.37;\n\
	 gg:z 3.08.\n\
gg:221 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2782;\n\
	 gg:x 5.9;\n\
	 gg:y 5.94;\n\
	 gg:z 3.63.\n\
gg:222 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 57.2;\n\
	 gg:table 62;\n\
	 gg:price 2782;\n\
	 gg:x 5.81;\n\
	 gg:y 5.77;\n\
	 gg:z 3.31.\n\
gg:223 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 60;\n\
	 gg:price 2782;\n\
	 gg:x 5.62;\n\
	 gg:y 5.54;\n\
	 gg:z 3.51.\n\
gg:224 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.1;\n\
	 gg:table 58;\n\
	 gg:price 2782;\n\
	 gg:x 5.78;\n\
	 gg:y 5.73;\n\
	 gg:z 3.63.\n\
gg:225 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 57;\n\
	 gg:price 2782;\n\
	 gg:x 5.76;\n\
	 gg:y 5.75;\n\
	 gg:z 3.5.\n\
gg:226 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 59;\n\
	 gg:price 2782;\n\
	 gg:x 5.73;\n\
	 gg:y 5.69;\n\
	 gg:z 3.58.\n\
gg:227 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 60;\n\
	 gg:price 2782;\n\
	 gg:x 5.68;\n\
	 gg:y 5.66;\n\
	 gg:z 3.56.\n\
gg:228 a gg:Diamond ;\n\
	 gg:carat 0.84;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 55.1;\n\
	 gg:table 67;\n\
	 gg:price 2782;\n\
	 gg:x 6.39;\n\
	 gg:y 6.2;\n\
	 gg:z 3.47.\n\
gg:229 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 59;\n\
	 gg:price 2782;\n\
	 gg:x 5.88;\n\
	 gg:y 5.85;\n\
	 gg:z 3.6.\n\
gg:230 a gg:Diamond ;\n\
	 gg:carat 0.52;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 62.2;\n\
	 gg:table 55;\n\
	 gg:price 2783;\n\
	 gg:x 5.14;\n\
	 gg:y 5.18;\n\
	 gg:z 3.21.\n\
gg:231 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63;\n\
	 gg:table 54;\n\
	 gg:price 2784;\n\
	 gg:x 5.69;\n\
	 gg:y 5.73;\n\
	 gg:z 3.6.\n\
gg:232 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.7;\n\
	 gg:table 56;\n\
	 gg:price 2784;\n\
	 gg:x 5.85;\n\
	 gg:y 5.92;\n\
	 gg:z 3.75.\n\
gg:233 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.6;\n\
	 gg:table 58;\n\
	 gg:price 2787;\n\
	 gg:x 5.66;\n\
	 gg:y 5.69;\n\
	 gg:z 3.61.\n\
gg:234 a gg:Diamond ;\n\
	 gg:carat 0.51;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62;\n\
	 gg:table 57;\n\
	 gg:price 2787;\n\
	 gg:x 5.11;\n\
	 gg:y 5.15;\n\
	 gg:z 3.18.\n\
gg:235 a gg:Diamond ;\n\
	 gg:carat 0.64;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2787;\n\
	 gg:x 5.54;\n\
	 gg:y 5.55;\n\
	 gg:z 3.41.\n\
gg:236 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.5;\n\
	 gg:table 60;\n\
	 gg:price 2788;\n\
	 gg:x 5.74;\n\
	 gg:y 5.77;\n\
	 gg:z 3.48.\n\
gg:237 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.1;\n\
	 gg:table 60;\n\
	 gg:price 2788;\n\
	 gg:x 6.07;\n\
	 gg:y 6.1;\n\
	 gg:z 3.72.\n\
gg:238 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2788;\n\
	 gg:x 5.85;\n\
	 gg:y 5.87;\n\
	 gg:z 3.62.\n\
gg:239 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.3;\n\
	 gg:table 56;\n\
	 gg:price 2788;\n\
	 gg:x 5.64;\n\
	 gg:y 5.68;\n\
	 gg:z 3.58.\n\
gg:240 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.4;\n\
	 gg:table 64;\n\
	 gg:price 2788;\n\
	 gg:x 5.97;\n\
	 gg:y 5.92;\n\
	 gg:z 3.53.\n\
gg:241 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 55;\n\
	 gg:price 2788;\n\
	 gg:x 5.71;\n\
	 gg:y 5.65;\n\
	 gg:z 3.55.\n\
gg:242 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 64.5;\n\
	 gg:table 58;\n\
	 gg:price 2788;\n\
	 gg:x 6.29;\n\
	 gg:y 6.21;\n\
	 gg:z 4.03.\n\
gg:243 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 59;\n\
	 gg:price 2788;\n\
	 gg:x 6.31;\n\
	 gg:y 6.22;\n\
	 gg:z 3.93.\n\
gg:244 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 64.2;\n\
	 gg:table 52;\n\
	 gg:price 2789;\n\
	 gg:x 5.81;\n\
	 gg:y 5.77;\n\
	 gg:z 3.72.\n\
gg:245 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.7;\n\
	 gg:table 54;\n\
	 gg:price 2789;\n\
	 gg:x 5.76;\n\
	 gg:y 5.85;\n\
	 gg:z 3.7.\n\
gg:246 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.4;\n\
	 gg:table 58;\n\
	 gg:price 2789;\n\
	 gg:x 5.92;\n\
	 gg:y 5.94;\n\
	 gg:z 3.58.\n\
gg:247 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 58;\n\
	 gg:price 2789;\n\
	 gg:x 5.82;\n\
	 gg:y 5.86;\n\
	 gg:z 3.61.\n\
gg:248 a gg:Diamond ;\n\
	 gg:carat 1.05;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.2;\n\
	 gg:table 56;\n\
	 gg:price 2789;\n\
	 gg:x 6.49;\n\
	 gg:y 6.45;\n\
	 gg:z 4.09.\n\
gg:249 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2789;\n\
	 gg:x 5.97;\n\
	 gg:y 6.01;\n\
	 gg:z 3.69.\n\
gg:250 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2789;\n\
	 gg:x 5.72;\n\
	 gg:y 5.75;\n\
	 gg:z 3.53.\n\
gg:251 a gg:Diamond ;\n\
	 gg:carat 0.55;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 2789;\n\
	 gg:x 5.28;\n\
	 gg:y 5.3;\n\
	 gg:z 3.22.\n\
gg:252 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61;\n\
	 gg:table 61;\n\
	 gg:price 2789;\n\
	 gg:x 5.94;\n\
	 gg:y 5.99;\n\
	 gg:z 3.64.\n\
gg:253 a gg:Diamond ;\n\
	 gg:carat 0.63;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 57;\n\
	 gg:price 2789;\n\
	 gg:x 5.48;\n\
	 gg:y 5.41;\n\
	 gg:z 3.38.\n\
gg:254 a gg:Diamond ;\n\
	 gg:carat 0.63;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 60;\n\
	 gg:price 2789;\n\
	 gg:x 5.55;\n\
	 gg:y 5.52;\n\
	 gg:z 3.37.\n\
gg:255 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 60;\n\
	 gg:price 2789;\n\
	 gg:x 5.9;\n\
	 gg:y 5.88;\n\
	 gg:z 3.61.\n\
gg:256 a gg:Diamond ;\n\
	 gg:carat 1.05;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 65.8;\n\
	 gg:table 59;\n\
	 gg:price 2789;\n\
	 gg:x 6.41;\n\
	 gg:y 6.27;\n\
	 gg:z 4.18.\n\
gg:257 a gg:Diamond ;\n\
	 gg:carat 0.64;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2790;\n\
	 gg:x 5.54;\n\
	 gg:y 5.58;\n\
	 gg:z 3.41.\n\
gg:258 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 58.8;\n\
	 gg:table 59;\n\
	 gg:price 2790;\n\
	 gg:x 6;\n\
	 gg:y 5.94;\n\
	 gg:z 3.51.\n\
gg:259 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 55;\n\
	 gg:price 2790;\n\
	 gg:x 6.02;\n\
	 gg:y 6.05;\n\
	 gg:z 3.76.\n\
gg:260 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.1;\n\
	 gg:table 62;\n\
	 gg:price 2790;\n\
	 gg:x 5.77;\n\
	 gg:y 5.74;\n\
	 gg:z 3.46.\n\
gg:261 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 59;\n\
	 gg:price 2790;\n\
	 gg:x 5.73;\n\
	 gg:y 5.69;\n\
	 gg:z 3.53.\n\
gg:262 a gg:Diamond ;\n\
	 gg:carat 0.87;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.6;\n\
	 gg:table 55.8;\n\
	 gg:price 2791;\n\
	 gg:x 6.07;\n\
	 gg:y 6.1;\n\
	 gg:z 3.87.\n\
gg:263 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 56;\n\
	 gg:price 2791;\n\
	 gg:x 5.74;\n\
	 gg:y 5.78;\n\
	 gg:z 3.58.\n\
gg:264 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.2;\n\
	 gg:table 59;\n\
	 gg:price 2792;\n\
	 gg:x 5.83;\n\
	 gg:y 5.86;\n\
	 gg:z 3.46.\n\
gg:265 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 59;\n\
	 gg:price 2792;\n\
	 gg:x 5.7;\n\
	 gg:y 5.75;\n\
	 gg:z 3.54.\n\
gg:266 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 55;\n\
	 gg:price 2792;\n\
	 gg:x 5.72;\n\
	 gg:y 5.77;\n\
	 gg:z 3.52.\n\
gg:267 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 60;\n\
	 gg:price 2792;\n\
	 gg:x 5.71;\n\
	 gg:y 5.65;\n\
	 gg:z 3.53.\n\
gg:268 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 60;\n\
	 gg:price 2792;\n\
	 gg:x 5.78;\n\
	 gg:y 5.75;\n\
	 gg:z 3.5.\n\
gg:269 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 59.6;\n\
	 gg:table 57;\n\
	 gg:price 2792;\n\
	 gg:x 5.91;\n\
	 gg:y 5.86;\n\
	 gg:z 3.51.\n\
gg:270 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 56;\n\
	 gg:price 2792;\n\
	 gg:x 5.73;\n\
	 gg:y 5.68;\n\
	 gg:z 3.55.\n\
gg:271 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.6;\n\
	 gg:table 57;\n\
	 gg:price 2793;\n\
	 gg:x 5.98;\n\
	 gg:y 6.06;\n\
	 gg:z 3.65.\n\
gg:272 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.9;\n\
	 gg:table 57;\n\
	 gg:price 2793;\n\
	 gg:x 5.66;\n\
	 gg:y 5.69;\n\
	 gg:z 3.57.\n\
gg:273 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.1;\n\
	 gg:table 55;\n\
	 gg:price 2793;\n\
	 gg:x 5.6;\n\
	 gg:y 5.66;\n\
	 gg:z 3.61.\n\
gg:274 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2793;\n\
	 gg:x 5.87;\n\
	 gg:y 5.91;\n\
	 gg:z 3.61.\n\
gg:275 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 55;\n\
	 gg:price 2793;\n\
	 gg:x 5.72;\n\
	 gg:y 5.76;\n\
	 gg:z 3.6.\n\
gg:276 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 56;\n\
	 gg:price 2794;\n\
	 gg:x 5.91;\n\
	 gg:y 5.86;\n\
	 gg:z 3.72.\n\
gg:277 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2795;\n\
	 gg:x 5.81;\n\
	 gg:y 5.82;\n\
	 gg:z 3.53.\n\
gg:278 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 60;\n\
	 gg:price 2795;\n\
	 gg:x 5.91;\n\
	 gg:y 5.86;\n\
	 gg:z 3.64.\n\
gg:279 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 55;\n\
	 gg:price 2795;\n\
	 gg:x 5.92;\n\
	 gg:y 5.96;\n\
	 gg:z 3.72.\n\
gg:280 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 60;\n\
	 gg:price 2795;\n\
	 gg:x 5.74;\n\
	 gg:y 5.72;\n\
	 gg:z 3.48.\n\
gg:281 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62;\n\
	 gg:table 60;\n\
	 gg:price 2795;\n\
	 gg:x 5.73;\n\
	 gg:y 5.69;\n\
	 gg:z 3.54.\n\
gg:282 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 63;\n\
	 gg:table 57;\n\
	 gg:price 2795;\n\
	 gg:x 5.72;\n\
	 gg:y 5.7;\n\
	 gg:z 3.6.\n\
gg:283 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58;\n\
	 gg:table 59;\n\
	 gg:price 2795;\n\
	 gg:x 6.17;\n\
	 gg:y 6.13;\n\
	 gg:z 3.57.\n\
gg:284 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.9;\n\
	 gg:table 57;\n\
	 gg:price 2795;\n\
	 gg:x 5.73;\n\
	 gg:y 5.65;\n\
	 gg:z 3.58.\n\
gg:285 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 58.2;\n\
	 gg:table 60;\n\
	 gg:price 2795;\n\
	 gg:x 6.61;\n\
	 gg:y 6.55;\n\
	 gg:z 3.83.\n\
gg:286 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 58;\n\
	 gg:price 2796;\n\
	 gg:x 5.7;\n\
	 gg:y 5.76;\n\
	 gg:z 3.62.\n\
gg:287 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 59;\n\
	 gg:price 2797;\n\
	 gg:x 5.94;\n\
	 gg:y 6.01;\n\
	 gg:z 3.66.\n\
gg:288 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.3;\n\
	 gg:table 60;\n\
	 gg:price 2797;\n\
	 gg:x 6.07;\n\
	 gg:y 6.1;\n\
	 gg:z 3.67.\n\
gg:289 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 60;\n\
	 gg:price 2797;\n\
	 gg:x 5.67;\n\
	 gg:y 5.71;\n\
	 gg:z 3.57.\n\
gg:290 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 58;\n\
	 gg:price 2797;\n\
	 gg:x 5.73;\n\
	 gg:y 5.75;\n\
	 gg:z 3.52.\n\
gg:291 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 60;\n\
	 gg:price 2797;\n\
	 gg:x 5.74;\n\
	 gg:y 5.69;\n\
	 gg:z 3.52.\n\
gg:292 a gg:Diamond ;\n\
	 gg:carat 0.57;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 55;\n\
	 gg:price 2797;\n\
	 gg:x 5.34;\n\
	 gg:y 5.35;\n\
	 gg:z 3.31.\n\
gg:293 a gg:Diamond ;\n\
	 gg:carat 0.51;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 56;\n\
	 gg:price 2797;\n\
	 gg:x 5.12;\n\
	 gg:y 5.16;\n\
	 gg:z 3.17.\n\
gg:294 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 58;\n\
	 gg:price 2797;\n\
	 gg:x 5.72;\n\
	 gg:y 5.75;\n\
	 gg:z 3.55.\n\
gg:295 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 58;\n\
	 gg:price 2797;\n\
	 gg:x 5.77;\n\
	 gg:y 5.81;\n\
	 gg:z 3.58.\n\
gg:296 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2797;\n\
	 gg:x 5.81;\n\
	 gg:y 5.82;\n\
	 gg:z 3.58.\n\
gg:297 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 58.8;\n\
	 gg:table 66;\n\
	 gg:price 2797;\n\
	 gg:x 5.81;\n\
	 gg:y 5.9;\n\
	 gg:z 3.44.\n\
gg:298 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2797;\n\
	 gg:x 6.03;\n\
	 gg:y 6.01;\n\
	 gg:z 3.67.\n\
gg:299 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 67.4;\n\
	 gg:table 60;\n\
	 gg:price 2797;\n\
	 gg:x 6.19;\n\
	 gg:y 6.05;\n\
	 gg:z 4.13.\n\
gg:300 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.4;\n\
	 gg:table 60;\n\
	 gg:price 2797;\n\
	 gg:x 5.92;\n\
	 gg:y 5.82;\n\
	 gg:z 3.72.\n\
gg:301 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 59;\n\
	 gg:price 2798;\n\
	 gg:x 5.87;\n\
	 gg:y 5.91;\n\
	 gg:z 3.62.\n\
gg:302 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 58;\n\
	 gg:table 62;\n\
	 gg:price 2799;\n\
	 gg:x 6.19;\n\
	 gg:y 6.25;\n\
	 gg:z 3.61.\n\
gg:303 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 54;\n\
	 gg:price 2799;\n\
	 gg:x 5.97;\n\
	 gg:y 6.02;\n\
	 gg:z 3.74.\n\
gg:304 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 57;\n\
	 gg:price 2799;\n\
	 gg:x 5.91;\n\
	 gg:y 5.86;\n\
	 gg:z 3.64.\n\
gg:305 a gg:Diamond ;\n\
	 gg:carat 0.6;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2800;\n\
	 gg:x 5.43;\n\
	 gg:y 5.46;\n\
	 gg:z 3.35.\n\
gg:306 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 59;\n\
	 gg:price 2800;\n\
	 gg:x 6.07;\n\
	 gg:y 6.11;\n\
	 gg:z 3.79.\n\
gg:307 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 58;\n\
	 gg:price 2800;\n\
	 gg:x 5.6;\n\
	 gg:y 5.66;\n\
	 gg:z 3.5.\n\
gg:308 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2800;\n\
	 gg:x 6.17;\n\
	 gg:y 6.23;\n\
	 gg:z 3.8.\n\
gg:309 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 57;\n\
	 gg:price 2800;\n\
	 gg:x 5.99;\n\
	 gg:y 6.08;\n\
	 gg:z 3.76.\n\
gg:310 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 57;\n\
	 gg:price 2800;\n\
	 gg:x 6.03;\n\
	 gg:y 6.07;\n\
	 gg:z 3.74.\n\
gg:311 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 59;\n\
	 gg:price 2800;\n\
	 gg:x 5.95;\n\
	 gg:y 6.02;\n\
	 gg:z 3.74.\n\
gg:312 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 60;\n\
	 gg:price 2800;\n\
	 gg:x 5.74;\n\
	 gg:y 5.68;\n\
	 gg:z 3.59.\n\
gg:313 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 59;\n\
	 gg:price 2800;\n\
	 gg:x 5.92;\n\
	 gg:y 5.95;\n\
	 gg:z 3.67.\n\
gg:314 a gg:Diamond ;\n\
	 gg:carat 0.61;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 62.3;\n\
	 gg:table 56;\n\
	 gg:price 2800;\n\
	 gg:x 5.43;\n\
	 gg:y 5.45;\n\
	 gg:z 3.39.\n\
gg:315 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59;\n\
	 gg:table 70;\n\
	 gg:price 2800;\n\
	 gg:x 5.89;\n\
	 gg:y 5.8;\n\
	 gg:z 3.46.\n\
gg:316 a gg:Diamond ;\n\
	 gg:carat 0.96;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 55;\n\
	 gg:price 2801;\n\
	 gg:x 6.37;\n\
	 gg:y 6.41;\n\
	 gg:z 3.88.\n\
gg:317 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 55;\n\
	 gg:price 2801;\n\
	 gg:x 5.8;\n\
	 gg:y 5.76;\n\
	 gg:z 3.61.\n\
gg:318 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 58;\n\
	 gg:price 2801;\n\
	 gg:x 5.76;\n\
	 gg:y 5.7;\n\
	 gg:z 3.59.\n\
gg:319 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.4;\n\
	 gg:table 57;\n\
	 gg:price 2801;\n\
	 gg:x 5.93;\n\
	 gg:y 5.96;\n\
	 gg:z 3.59.\n\
gg:320 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 58;\n\
	 gg:price 2801;\n\
	 gg:x 5.7;\n\
	 gg:y 5.67;\n\
	 gg:z 3.53.\n\
gg:321 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 57.8;\n\
	 gg:table 60;\n\
	 gg:price 2801;\n\
	 gg:x 5.9;\n\
	 gg:y 5.87;\n\
	 gg:z 3.4.\n\
gg:322 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.8;\n\
	 gg:table 58;\n\
	 gg:price 2801;\n\
	 gg:x 5.64;\n\
	 gg:y 5.61;\n\
	 gg:z 3.59.\n\
gg:323 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 57;\n\
	 gg:price 2801;\n\
	 gg:x 5.69;\n\
	 gg:y 5.64;\n\
	 gg:z 3.56.\n\
gg:324 a gg:Diamond ;\n\
	 gg:carat 1.04;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 58;\n\
	 gg:price 2801;\n\
	 gg:x 6.46;\n\
	 gg:y 6.41;\n\
	 gg:z 4.\n\
gg:325 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2801;\n\
	 gg:x 6.45;\n\
	 gg:y 6.34;\n\
	 gg:z 3.98.\n\
gg:326 a gg:Diamond ;\n\
	 gg:carat 0.87;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.9;\n\
	 gg:table 58;\n\
	 gg:price 2802;\n\
	 gg:x 6.19;\n\
	 gg:y 6.23;\n\
	 gg:z 3.72.\n\
gg:327 a gg:Diamond ;\n\
	 gg:carat 0.53;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 61.9;\n\
	 gg:table 54;\n\
	 gg:price 2802;\n\
	 gg:x 5.22;\n\
	 gg:y 5.25;\n\
	 gg:z 3.24.\n\
gg:328 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63;\n\
	 gg:table 55;\n\
	 gg:price 2802;\n\
	 gg:x 5.79;\n\
	 gg:y 5.61;\n\
	 gg:z 3.59.\n\
gg:329 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 58;\n\
	 gg:price 2802;\n\
	 gg:x 5.83;\n\
	 gg:y 5.7;\n\
	 gg:z 3.6.\n\
gg:330 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.9;\n\
	 gg:table 58;\n\
	 gg:price 2803;\n\
	 gg:x 5.63;\n\
	 gg:y 5.65;\n\
	 gg:z 3.55.\n\
gg:331 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 56;\n\
	 gg:price 2803;\n\
	 gg:x 5.74;\n\
	 gg:y 5.79;\n\
	 gg:z 3.66.\n\
gg:332 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2803;\n\
	 gg:x 5.75;\n\
	 gg:y 5.71;\n\
	 gg:z 3.51.\n\
gg:333 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.6;\n\
	 gg:table 54;\n\
	 gg:price 2803;\n\
	 gg:x 5.84;\n\
	 gg:y 5.89;\n\
	 gg:z 3.55.\n\
gg:334 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 65.1;\n\
	 gg:table 58;\n\
	 gg:price 2803;\n\
	 gg:x 5.56;\n\
	 gg:y 5.59;\n\
	 gg:z 3.63.\n\
gg:335 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 2803;\n\
	 gg:x 5.7;\n\
	 gg:y 5.67;\n\
	 gg:z 3.56.\n\
gg:336 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58;\n\
	 gg:table 62;\n\
	 gg:price 2803;\n\
	 gg:x 5.85;\n\
	 gg:y 5.81;\n\
	 gg:z 3.38.\n\
gg:337 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 61;\n\
	 gg:price 2803;\n\
	 gg:x 5.7;\n\
	 gg:y 5.65;\n\
	 gg:z 3.54.\n\
gg:338 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 57;\n\
	 gg:price 2803;\n\
	 gg:x 5.93;\n\
	 gg:y 5.88;\n\
	 gg:z 3.62.\n\
gg:339 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.9;\n\
	 gg:table 60;\n\
	 gg:price 2803;\n\
	 gg:x 5.81;\n\
	 gg:y 5.77;\n\
	 gg:z 3.47.\n\
gg:340 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.8;\n\
	 gg:table 58;\n\
	 gg:price 2803;\n\
	 gg:x 6.03;\n\
	 gg:y 5.95;\n\
	 gg:z 3.64.\n\
gg:341 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 55;\n\
	 gg:price 2803;\n\
	 gg:x 5.66;\n\
	 gg:y 5.64;\n\
	 gg:z 3.59.\n\
gg:342 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 57;\n\
	 gg:price 2803;\n\
	 gg:x 6.21;\n\
	 gg:y 6.15;\n\
	 gg:z 3.85.\n\
gg:343 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.8;\n\
	 gg:table 58;\n\
	 gg:price 2804;\n\
	 gg:x 5.62;\n\
	 gg:y 5.66;\n\
	 gg:z 3.6.\n\
gg:344 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64;\n\
	 gg:table 57;\n\
	 gg:price 2804;\n\
	 gg:x 5.66;\n\
	 gg:y 5.68;\n\
	 gg:z 3.63.\n\
gg:345 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 56;\n\
	 gg:price 2804;\n\
	 gg:x 5.88;\n\
	 gg:y 5.96;\n\
	 gg:z 3.7.\n\
gg:346 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2804;\n\
	 gg:x 5.69;\n\
	 gg:y 5.73;\n\
	 gg:z 3.56.\n\
gg:347 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 57;\n\
	 gg:price 2804;\n\
	 gg:x 5.74;\n\
	 gg:y 5.77;\n\
	 gg:z 3.55.\n\
gg:348 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 58;\n\
	 gg:price 2804;\n\
	 gg:x 5.75;\n\
	 gg:y 5.7;\n\
	 gg:z 3.56.\n\
gg:349 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2804;\n\
	 gg:x 6.01;\n\
	 gg:y 6.08;\n\
	 gg:z 3.72.\n\
gg:350 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 59;\n\
	 gg:price 2804;\n\
	 gg:x 5.68;\n\
	 gg:y 5.7;\n\
	 gg:z 3.47.\n\
gg:351 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 56;\n\
	 gg:price 2804;\n\
	 gg:x 5.74;\n\
	 gg:y 5.77;\n\
	 gg:z 3.58.\n\
gg:352 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 54;\n\
	 gg:price 2804;\n\
	 gg:x 5.77;\n\
	 gg:y 5.8;\n\
	 gg:z 3.56.\n\
gg:353 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 67.3;\n\
	 gg:table 59;\n\
	 gg:price 2804;\n\
	 gg:x 5.93;\n\
	 gg:y 5.84;\n\
	 gg:z 3.96.\n\
gg:354 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 58;\n\
	 gg:price 2805;\n\
	 gg:x 5.85;\n\
	 gg:y 5.78;\n\
	 gg:z 3.59.\n\
gg:355 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 56;\n\
	 gg:price 2805;\n\
	 gg:x 5.8;\n\
	 gg:y 5.77;\n\
	 gg:z 3.58.\n\
gg:356 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 58;\n\
	 gg:price 2805;\n\
	 gg:x 5.77;\n\
	 gg:y 5.81;\n\
	 gg:z 3.58.\n\
gg:357 a gg:Diamond ;\n\
	 gg:carat 0.57;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 58.7;\n\
	 gg:table 66;\n\
	 gg:price 2805;\n\
	 gg:x 5.34;\n\
	 gg:y 5.43;\n\
	 gg:z 3.16.\n\
gg:358 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2805;\n\
	 gg:x 5.75;\n\
	 gg:y 5.7;\n\
	 gg:z 3.58.\n\
gg:359 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 56;\n\
	 gg:price 2805;\n\
	 gg:x 5.74;\n\
	 gg:y 5.7;\n\
	 gg:z 3.59.\n\
gg:360 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.1;\n\
	 gg:table 68;\n\
	 gg:price 2805;\n\
	 gg:x 5.82;\n\
	 gg:y 5.75;\n\
	 gg:z 3.53.\n\
gg:361 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64;\n\
	 gg:table 57;\n\
	 gg:price 2805;\n\
	 gg:x 5.92;\n\
	 gg:y 5.89;\n\
	 gg:z 3.78.\n\
gg:362 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 60;\n\
	 gg:price 2806;\n\
	 gg:x 5.89;\n\
	 gg:y 5.94;\n\
	 gg:z 3.69.\n\
gg:363 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.6;\n\
	 gg:table 58;\n\
	 gg:price 2806;\n\
	 gg:x 5.85;\n\
	 gg:y 5.9;\n\
	 gg:z 3.56.\n\
gg:364 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 55;\n\
	 gg:price 2806;\n\
	 gg:x 5.72;\n\
	 gg:y 5.74;\n\
	 gg:z 3.53.\n\
gg:365 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 58;\n\
	 gg:price 2807;\n\
	 gg:x 5.66;\n\
	 gg:y 5.72;\n\
	 gg:z 3.54.\n\
gg:366 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60;\n\
	 gg:table 57;\n\
	 gg:price 2807;\n\
	 gg:x 5.84;\n\
	 gg:y 5.9;\n\
	 gg:z 3.52.\n\
gg:367 a gg:Diamond ;\n\
	 gg:carat 0.93;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 57;\n\
	 gg:price 2807;\n\
	 gg:x 6.21;\n\
	 gg:y 6.19;\n\
	 gg:z 3.84.\n\
gg:368 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 57;\n\
	 gg:price 2808;\n\
	 gg:x 5.87;\n\
	 gg:y 5.91;\n\
	 gg:z 3.7.\n\
gg:369 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62;\n\
	 gg:table 57;\n\
	 gg:price 2808;\n\
	 gg:x 5.64;\n\
	 gg:y 5.71;\n\
	 gg:z 3.52.\n\
gg:370 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 66.4;\n\
	 gg:table 59;\n\
	 gg:price 2808;\n\
	 gg:x 6.16;\n\
	 gg:y 6.09;\n\
	 gg:z 4.07.\n\
gg:371 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.4;\n\
	 gg:table 56;\n\
	 gg:price 2808;\n\
	 gg:x 5.78;\n\
	 gg:y 5.74;\n\
	 gg:z 3.65.\n\
gg:372 a gg:Diamond ;\n\
	 gg:carat 0.58;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.9;\n\
	 gg:table 56;\n\
	 gg:price 2808;\n\
	 gg:x 5.41;\n\
	 gg:y 5.43;\n\
	 gg:z 3.3.\n\
gg:373 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 57;\n\
	 gg:price 2808;\n\
	 gg:x 5.74;\n\
	 gg:y 5.7;\n\
	 gg:z 3.61.\n\
gg:374 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 59;\n\
	 gg:price 2809;\n\
	 gg:x 5.85;\n\
	 gg:y 5.79;\n\
	 gg:z 3.67.\n\
gg:375 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.2;\n\
	 gg:table 57;\n\
	 gg:price 2809;\n\
	 gg:x 6.15;\n\
	 gg:y 6.05;\n\
	 gg:z 3.61.\n\
gg:376 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 54;\n\
	 gg:price 2809;\n\
	 gg:x 5.84;\n\
	 gg:y 5.8;\n\
	 gg:z 3.53.\n\
gg:377 a gg:Diamond ;\n\
	 gg:carat 1.2;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 64.6;\n\
	 gg:table 56;\n\
	 gg:price 2809;\n\
	 gg:x 6.73;\n\
	 gg:y 6.66;\n\
	 gg:z 4.33.\n\
gg:378 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2810;\n\
	 gg:x 5.63;\n\
	 gg:y 5.7;\n\
	 gg:z 3.5.\n\
gg:379 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.9;\n\
	 gg:table 60;\n\
	 gg:price 2810;\n\
	 gg:x 5.77;\n\
	 gg:y 5.84;\n\
	 gg:z 3.48.\n\
gg:380 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 55;\n\
	 gg:price 2810;\n\
	 gg:x 5.81;\n\
	 gg:y 5.85;\n\
	 gg:z 3.6.\n\
gg:381 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 61;\n\
	 gg:price 2810;\n\
	 gg:x 5.57;\n\
	 gg:y 5.61;\n\
	 gg:z 3.51.\n\
gg:382 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 57;\n\
	 gg:price 2810;\n\
	 gg:x 5.84;\n\
	 gg:y 5.93;\n\
	 gg:z 3.69.\n\
gg:383 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 58;\n\
	 gg:price 2811;\n\
	 gg:x 5.72;\n\
	 gg:y 5.76;\n\
	 gg:z 3.64.\n\
gg:384 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 54;\n\
	 gg:price 2811;\n\
	 gg:x 5.98;\n\
	 gg:y 5.95;\n\
	 gg:z 3.79.\n\
gg:385 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 65.7;\n\
	 gg:table 59;\n\
	 gg:price 2811;\n\
	 gg:x 6.14;\n\
	 gg:y 6.07;\n\
	 gg:z 4.01.\n\
gg:386 a gg:Diamond ;\n\
	 gg:carat 0.99;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 68.1;\n\
	 gg:table 56;\n\
	 gg:price 2811;\n\
	 gg:x 6.21;\n\
	 gg:y 6.06;\n\
	 gg:z 4.18.\n\
gg:387 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63;\n\
	 gg:table 60;\n\
	 gg:price 2812;\n\
	 gg:x 5.57;\n\
	 gg:y 5.64;\n\
	 gg:z 3.53.\n\
gg:388 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.5;\n\
	 gg:table 58;\n\
	 gg:price 2812;\n\
	 gg:x 5.75;\n\
	 gg:y 5.85;\n\
	 gg:z 3.45.\n\
gg:389 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 59;\n\
	 gg:price 2812;\n\
	 gg:x 5.49;\n\
	 gg:y 5.53;\n\
	 gg:z 3.5.\n\
gg:390 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 58;\n\
	 gg:price 2812;\n\
	 gg:x 5.63;\n\
	 gg:y 5.69;\n\
	 gg:z 3.49.\n\
gg:391 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.37;\n\
	 gg:y 4.34;\n\
	 gg:z 2.73.\n\
gg:392 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.39;\n\
	 gg:y 4.34;\n\
	 gg:z 2.74.\n\
gg:393 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 57;\n\
	 gg:price 554;\n\
	 gg:x 4.37;\n\
	 gg:y 4.35;\n\
	 gg:z 2.72.\n\
gg:394 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 59;\n\
	 gg:price 554;\n\
	 gg:x 4.39;\n\
	 gg:y 4.36;\n\
	 gg:z 2.67.\n\
gg:395 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 56;\n\
	 gg:price 554;\n\
	 gg:x 4.39;\n\
	 gg:y 4.36;\n\
	 gg:z 2.76.\n\
gg:396 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 57;\n\
	 gg:price 554;\n\
	 gg:x 4.47;\n\
	 gg:y 4.42;\n\
	 gg:z 2.7.\n\
gg:397 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 59;\n\
	 gg:price 554;\n\
	 gg:x 4.31;\n\
	 gg:y 4.29;\n\
	 gg:z 2.62.\n\
gg:398 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.1;\n\
	 gg:table 55;\n\
	 gg:price 554;\n\
	 gg:x 4.41;\n\
	 gg:y 4.38;\n\
	 gg:z 2.64.\n\
gg:399 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 58;\n\
	 gg:price 554;\n\
	 gg:x 4.28;\n\
	 gg:y 4.24;\n\
	 gg:z 2.68.\n\
gg:400 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.3;\n\
	 gg:table 56;\n\
	 gg:price 554;\n\
	 gg:x 4.29;\n\
	 gg:y 4.27;\n\
	 gg:z 2.71.\n\
gg:401 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.8;\n\
	 gg:table 55;\n\
	 gg:price 554;\n\
	 gg:x 4.26;\n\
	 gg:y 4.2;\n\
	 gg:z 2.7.\n\
gg:402 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 57;\n\
	 gg:price 554;\n\
	 gg:x 4.27;\n\
	 gg:y 4.22;\n\
	 gg:z 2.67.\n\
gg:403 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 60;\n\
	 gg:price 554;\n\
	 gg:x 4.25;\n\
	 gg:y 4.23;\n\
	 gg:z 2.69.\n\
gg:404 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.9;\n\
	 gg:table 55;\n\
	 gg:price 554;\n\
	 gg:x 4.36;\n\
	 gg:y 4.34;\n\
	 gg:z 2.78.\n\
gg:405 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 56;\n\
	 gg:price 554;\n\
	 gg:x 4.85;\n\
	 gg:y 4.79;\n\
	 gg:z 2.95.\n\
gg:406 a gg:Diamond ;\n\
	 gg:carat 0.29;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 55;\n\
	 gg:price 555;\n\
	 gg:x 4.28;\n\
	 gg:y 4.33;\n\
	 gg:z 2.66.\n\
gg:407 a gg:Diamond ;\n\
	 gg:carat 0.29;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 55;\n\
	 gg:price 555;\n\
	 gg:x 4.2;\n\
	 gg:y 4.25;\n\
	 gg:z 2.63.\n\
gg:408 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 58;\n\
	 gg:price 555;\n\
	 gg:x 4.32;\n\
	 gg:y 4.35;\n\
	 gg:z 2.68.\n\
gg:409 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 555;\n\
	 gg:x 4.47;\n\
	 gg:y 4.5;\n\
	 gg:z 2.76.\n\
gg:410 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.4;\n\
	 gg:table 57;\n\
	 gg:price 555;\n\
	 gg:x 4.54;\n\
	 gg:y 4.57;\n\
	 gg:z 2.75.\n\
gg:411 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 55;\n\
	 gg:price 555;\n\
	 gg:x 4.48;\n\
	 gg:y 4.52;\n\
	 gg:z 2.78.\n\
gg:412 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62;\n\
	 gg:table 56;\n\
	 gg:price 555;\n\
	 gg:x 4.5;\n\
	 gg:y 4.53;\n\
	 gg:z 2.8.\n\
gg:413 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 56;\n\
	 gg:price 555;\n\
	 gg:x 4.29;\n\
	 gg:y 4.31;\n\
	 gg:z 2.68.\n\
gg:414 a gg:Diamond ;\n\
	 gg:carat 0.29;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 555;\n\
	 gg:x 4.26;\n\
	 gg:y 4.31;\n\
	 gg:z 2.64.\n\
gg:415 a gg:Diamond ;\n\
	 gg:carat 0.35;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.6;\n\
	 gg:table 56;\n\
	 gg:price 555;\n\
	 gg:x 4.56;\n\
	 gg:y 4.58;\n\
	 gg:z 2.77.\n\
gg:416 a gg:Diamond ;\n\
	 gg:carat 0.43;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 58.4;\n\
	 gg:table 62;\n\
	 gg:price 555;\n\
	 gg:x 4.94;\n\
	 gg:y 5;\n\
	 gg:z 2.9.\n\
gg:417 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 58;\n\
	 gg:price 556;\n\
	 gg:x 4.37;\n\
	 gg:y 4.42;\n\
	 gg:z 2.7.\n\
gg:418 a gg:Diamond ;\n\
	 gg:carat 0.36;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 56;\n\
	 gg:price 556;\n\
	 gg:x 4.54;\n\
	 gg:y 4.57;\n\
	 gg:z 2.82.\n\
gg:419 a gg:Diamond ;\n\
	 gg:carat 0.3;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62;\n\
	 gg:table 56;\n\
	 gg:price 556;\n\
	 gg:x 4.28;\n\
	 gg:y 4.3;\n\
	 gg:z 2.66.\n\
gg:420 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 57;\n\
	 gg:price 556;\n\
	 gg:x 4.09;\n\
	 gg:y 4.12;\n\
	 gg:z 2.52.\n\
gg:421 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2812;\n\
	 gg:x 5.64;\n\
	 gg:y 5.72;\n\
	 gg:z 3.54.\n\
gg:422 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.9;\n\
	 gg:table 61;\n\
	 gg:price 2812;\n\
	 gg:x 5.66;\n\
	 gg:y 5.71;\n\
	 gg:z 3.46.\n\
gg:423 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 57;\n\
	 gg:price 2812;\n\
	 gg:x 5.69;\n\
	 gg:y 5.72;\n\
	 gg:z 3.56.\n\
gg:424 a gg:Diamond ;\n\
	 gg:carat 0.99;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 55;\n\
	 gg:table 61;\n\
	 gg:price 2812;\n\
	 gg:x 6.72;\n\
	 gg:y 6.67;\n\
	 gg:z 3.68.\n\
gg:425 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58.6;\n\
	 gg:table 60;\n\
	 gg:price 2812;\n\
	 gg:x 5.92;\n\
	 gg:y 5.89;\n\
	 gg:z 3.46.\n\
gg:426 a gg:Diamond ;\n\
	 gg:carat 0.51;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62;\n\
	 gg:table 57;\n\
	 gg:price 2812;\n\
	 gg:x 5.15;\n\
	 gg:y 5.11;\n\
	 gg:z 3.18.\n\
gg:427 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.8;\n\
	 gg:table 58;\n\
	 gg:price 2813;\n\
	 gg:x 6.3;\n\
	 gg:y 6.29;\n\
	 gg:z 3.77.\n\
gg:428 a gg:Diamond ;\n\
	 gg:carat 0.84;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 55;\n\
	 gg:price 2813;\n\
	 gg:x 6;\n\
	 gg:y 5.95;\n\
	 gg:z 3.79.\n\
gg:429 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.3;\n\
	 gg:table 58;\n\
	 gg:price 2813;\n\
	 gg:x 6.09;\n\
	 gg:y 6.05;\n\
	 gg:z 3.9.\n\
gg:430 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 59;\n\
	 gg:price 2814;\n\
	 gg:x 5.86;\n\
	 gg:y 5.81;\n\
	 gg:z 3.63.\n\
gg:431 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 57;\n\
	 gg:price 2814;\n\
	 gg:x 5.88;\n\
	 gg:y 5.85;\n\
	 gg:z 3.62.\n\
gg:432 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.1;\n\
	 gg:table 59;\n\
	 gg:price 2814;\n\
	 gg:x 5.86;\n\
	 gg:y 5.83;\n\
	 gg:z 3.57.\n\
gg:433 a gg:Diamond ;\n\
	 gg:carat 0.55;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2815;\n\
	 gg:x 5.23;\n\
	 gg:y 5.27;\n\
	 gg:z 3.23.\n\
gg:434 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 58.5;\n\
	 gg:table 62;\n\
	 gg:price 2815;\n\
	 gg:x 5.93;\n\
	 gg:y 6.01;\n\
	 gg:z 3.49.\n\
gg:435 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 58;\n\
	 gg:price 2815;\n\
	 gg:x 5.79;\n\
	 gg:y 5.81;\n\
	 gg:z 3.58.\n\
gg:436 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.4;\n\
	 gg:table 56;\n\
	 gg:price 2815;\n\
	 gg:x 5.75;\n\
	 gg:y 5.81;\n\
	 gg:z 3.49.\n\
gg:437 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 56;\n\
	 gg:price 2815;\n\
	 gg:x 5.7;\n\
	 gg:y 5.76;\n\
	 gg:z 3.52.\n\
gg:438 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 55;\n\
	 gg:price 2815;\n\
	 gg:x 5.73;\n\
	 gg:y 5.79;\n\
	 gg:z 3.54.\n\
gg:439 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 56;\n\
	 gg:price 2815;\n\
	 gg:x 5.72;\n\
	 gg:y 5.77;\n\
	 gg:z 3.53.\n\
gg:440 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 65;\n\
	 gg:table 56;\n\
	 gg:price 2815;\n\
	 gg:x 6.08;\n\
	 gg:y 6.04;\n\
	 gg:z 3.94.\n\
gg:441 a gg:Diamond ;\n\
	 gg:carat 0.95;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 56;\n\
	 gg:table 60;\n\
	 gg:price 2815;\n\
	 gg:x 6.62;\n\
	 gg:y 6.53;\n\
	 gg:z 3.68.\n\
gg:442 a gg:Diamond ;\n\
	 gg:carat 0.89;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.2;\n\
	 gg:table 59;\n\
	 gg:price 2815;\n\
	 gg:x 6.26;\n\
	 gg:y 6.23;\n\
	 gg:z 3.76.\n\
gg:443 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58.3;\n\
	 gg:table 58;\n\
	 gg:price 2815;\n\
	 gg:x 5.99;\n\
	 gg:y 5.92;\n\
	 gg:z 3.47.\n\
gg:444 a gg:Diamond ;\n\
	 gg:carat 0.96;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 53.1;\n\
	 gg:table 63;\n\
	 gg:price 2815;\n\
	 gg:x 6.73;\n\
	 gg:y 6.65;\n\
	 gg:z 3.55.\n\
gg:445 a gg:Diamond ;\n\
	 gg:carat 1.02;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.3;\n\
	 gg:table 58;\n\
	 gg:price 2815;\n\
	 gg:x 6.55;\n\
	 gg:y 6.5;\n\
	 gg:z 3.94.\n\
gg:446 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 56;\n\
	 gg:price 2816;\n\
	 gg:x 5.91;\n\
	 gg:y 5.95;\n\
	 gg:z 3.64.\n\
gg:447 a gg:Diamond ;\n\
	 gg:carat 0.61;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.1;\n\
	 gg:table 57;\n\
	 gg:price 2816;\n\
	 gg:x 5.52;\n\
	 gg:y 5.54;\n\
	 gg:z 3.32.\n\
gg:448 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 55;\n\
	 gg:price 2816;\n\
	 gg:x 5.61;\n\
	 gg:y 5.69;\n\
	 gg:z 3.58.\n\
gg:449 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 59;\n\
	 gg:price 2816;\n\
	 gg:x 5.96;\n\
	 gg:y 5.88;\n\
	 gg:z 3.64.\n\
gg:450 a gg:Diamond ;\n\
	 gg:carat 0.87;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 56;\n\
	 gg:price 2816;\n\
	 gg:x 6.16;\n\
	 gg:y 6.13;\n\
	 gg:z 3.85.\n\
gg:451 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 55;\n\
	 gg:price 2816;\n\
	 gg:x 6.04;\n\
	 gg:y 6;\n\
	 gg:z 3.76.\n\
gg:452 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 2817;\n\
	 gg:x 5.78;\n\
	 gg:y 5.73;\n\
	 gg:z 3.53.\n\
gg:453 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.2;\n\
	 gg:table 56;\n\
	 gg:price 2817;\n\
	 gg:x 5.84;\n\
	 gg:y 5.89;\n\
	 gg:z 3.53.\n\
gg:454 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 57;\n\
	 gg:price 2817;\n\
	 gg:x 5.66;\n\
	 gg:y 5.64;\n\
	 gg:z 3.54.\n\
gg:455 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2817;\n\
	 gg:x 5.69;\n\
	 gg:y 5.65;\n\
	 gg:z 3.53.\n\
gg:456 a gg:Diamond ;\n\
	 gg:carat 0.63;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2817;\n\
	 gg:x 5.48;\n\
	 gg:y 5.52;\n\
	 gg:z 3.38.\n\
gg:457 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.2;\n\
	 gg:table 59;\n\
	 gg:price 2817;\n\
	 gg:x 5.86;\n\
	 gg:y 5.83;\n\
	 gg:z 3.46.\n\
gg:458 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 59;\n\
	 gg:price 2817;\n\
	 gg:x 5.75;\n\
	 gg:y 5.7;\n\
	 gg:z 3.54.\n\
gg:459 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 55;\n\
	 gg:price 2817;\n\
	 gg:x 5.77;\n\
	 gg:y 5.72;\n\
	 gg:z 3.52.\n\
gg:460 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 58;\n\
	 gg:price 2817;\n\
	 gg:x 5.77;\n\
	 gg:y 5.73;\n\
	 gg:z 3.53.\n\
gg:461 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 55;\n\
	 gg:price 2817;\n\
	 gg:x 6.2;\n\
	 gg:y 6.16;\n\
	 gg:z 3.88.\n\
gg:462 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 64;\n\
	 gg:price 2817;\n\
	 gg:x 5.6;\n\
	 gg:y 5.54;\n\
	 gg:z 3.5.\n\
gg:463 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 61;\n\
	 gg:price 2818;\n\
	 gg:x 5.66;\n\
	 gg:y 5.63;\n\
	 gg:z 3.52.\n\
gg:464 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.3;\n\
	 gg:table 60;\n\
	 gg:price 2818;\n\
	 gg:x 5.78;\n\
	 gg:y 5.73;\n\
	 gg:z 3.41.\n\
gg:465 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63;\n\
	 gg:table 60;\n\
	 gg:price 2818;\n\
	 gg:x 5.64;\n\
	 gg:y 5.6;\n\
	 gg:z 3.54.\n\
gg:466 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 60;\n\
	 gg:price 2818;\n\
	 gg:x 6.43;\n\
	 gg:y 6.39;\n\
	 gg:z 3.93.\n\
gg:467 a gg:Diamond ;\n\
	 gg:carat 0.86;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.3;\n\
	 gg:table 62;\n\
	 gg:price 2818;\n\
	 gg:x 6.36;\n\
	 gg:y 6.22;\n\
	 gg:z 3.73.\n\
gg:468 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2818;\n\
	 gg:x 6.07;\n\
	 gg:y 6;\n\
	 gg:z 3.68.\n\
gg:469 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 57;\n\
	 gg:price 2818;\n\
	 gg:x 5.66;\n\
	 gg:y 5.61;\n\
	 gg:z 3.54.\n\
gg:470 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.6;\n\
	 gg:table 57;\n\
	 gg:price 2818;\n\
	 gg:x 5.91;\n\
	 gg:y 5.83;\n\
	 gg:z 3.5.\n\
gg:471 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 60;\n\
	 gg:price 2818;\n\
	 gg:x 5.69;\n\
	 gg:y 5.64;\n\
	 gg:z 3.5.\n\
gg:472 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 57;\n\
	 gg:price 2818;\n\
	 gg:x 5.68;\n\
	 gg:y 5.64;\n\
	 gg:z 3.55.\n\
gg:473 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 65.3;\n\
	 gg:table 62;\n\
	 gg:price 2818;\n\
	 gg:x 6.34;\n\
	 gg:y 6.12;\n\
	 gg:z 4.08.\n\
gg:474 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.8;\n\
	 gg:table 58;\n\
	 gg:price 2819;\n\
	 gg:x 5.64;\n\
	 gg:y 5.68;\n\
	 gg:z 3.61.\n\
gg:475 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 56;\n\
	 gg:price 2819;\n\
	 gg:x 5.73;\n\
	 gg:y 5.77;\n\
	 gg:z 3.58.\n\
gg:476 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.7;\n\
	 gg:table 63;\n\
	 gg:price 2819;\n\
	 gg:x 5.76;\n\
	 gg:y 5.79;\n\
	 gg:z 3.45.\n\
gg:477 a gg:Diamond ;\n\
	 gg:carat 0.86;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 64.3;\n\
	 gg:table 60;\n\
	 gg:price 2819;\n\
	 gg:x 5.97;\n\
	 gg:y 5.95;\n\
	 gg:z 3.83.\n\
gg:478 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 58;\n\
	 gg:price 2820;\n\
	 gg:x 5.66;\n\
	 gg:y 5.69;\n\
	 gg:z 3.57.\n\
gg:479 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62;\n\
	 gg:table 57;\n\
	 gg:price 2821;\n\
	 gg:x 5.8;\n\
	 gg:y 5.78;\n\
	 gg:z 3.59.\n\
gg:480 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 59;\n\
	 gg:price 2821;\n\
	 gg:x 5.77;\n\
	 gg:y 5.73;\n\
	 gg:z 3.54.\n\
gg:481 a gg:Diamond ;\n\
	 gg:carat 0.53;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 55;\n\
	 gg:price 2821;\n\
	 gg:x 5.2;\n\
	 gg:y 5.21;\n\
	 gg:z 3.22.\n\
gg:482 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 58;\n\
	 gg:price 2821;\n\
	 gg:x 5.83;\n\
	 gg:y 5.76;\n\
	 gg:z 3.55.\n\
gg:483 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.6;\n\
	 gg:table 57;\n\
	 gg:price 2821;\n\
	 gg:x 5.72;\n\
	 gg:y 5.7;\n\
	 gg:z 3.63.\n\
gg:484 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.6;\n\
	 gg:table 61;\n\
	 gg:price 2821;\n\
	 gg:x 5.92;\n\
	 gg:y 5.85;\n\
	 gg:z 3.51.\n\
gg:485 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 59;\n\
	 gg:price 2821;\n\
	 gg:x 5.77;\n\
	 gg:y 5.68;\n\
	 gg:z 3.56.\n\
gg:486 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 55;\n\
	 gg:price 2821;\n\
	 gg:x 5.84;\n\
	 gg:y 5.82;\n\
	 gg:z 3.6.\n\
gg:487 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 58;\n\
	 gg:price 2821;\n\
	 gg:x 5.76;\n\
	 gg:y 5.7;\n\
	 gg:z 3.62.\n\
gg:488 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 60;\n\
	 gg:price 2822;\n\
	 gg:x 5.74;\n\
	 gg:y 5.71;\n\
	 gg:z 3.48.\n\
gg:489 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.3;\n\
	 gg:table 59;\n\
	 gg:price 2822;\n\
	 gg:x 5.84;\n\
	 gg:y 5.8;\n\
	 gg:z 3.51.\n\
gg:490 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.9;\n\
	 gg:table 60;\n\
	 gg:price 2822;\n\
	 gg:x 5.8;\n\
	 gg:y 5.76;\n\
	 gg:z 3.52.\n\
gg:491 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 59;\n\
	 gg:price 2822;\n\
	 gg:x 5.77;\n\
	 gg:y 5.7;\n\
	 gg:z 3.58.\n\
gg:492 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.2;\n\
	 gg:table 60;\n\
	 gg:price 2822;\n\
	 gg:x 5.73;\n\
	 gg:y 5.7;\n\
	 gg:z 3.44.\n\
gg:493 a gg:Diamond ;\n\
	 gg:carat 0.6;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62;\n\
	 gg:table 55;\n\
	 gg:price 2822;\n\
	 gg:x 5.37;\n\
	 gg:y 5.4;\n\
	 gg:z 3.34.\n\
gg:494 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 57;\n\
	 gg:price 2822;\n\
	 gg:x 5.85;\n\
	 gg:y 5.89;\n\
	 gg:z 3.57.\n\
gg:495 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 55;\n\
	 gg:price 2822;\n\
	 gg:x 5.75;\n\
	 gg:y 5.78;\n\
	 gg:z 3.58.\n\
gg:496 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 60;\n\
	 gg:price 2822;\n\
	 gg:x 5.71;\n\
	 gg:y 5.67;\n\
	 gg:z 3.57.\n\
gg:497 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 58;\n\
	 gg:price 2822;\n\
	 gg:x 5.75;\n\
	 gg:y 5.73;\n\
	 gg:z 3.52.\n\
gg:498 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.2;\n\
	 gg:table 60;\n\
	 gg:price 2822;\n\
	 gg:x 5.82;\n\
	 gg:y 5.75;\n\
	 gg:z 3.48.\n\
gg:499 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2822;\n\
	 gg:x 5.75;\n\
	 gg:y 5.72;\n\
	 gg:z 3.48.\n\
gg:500 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64;\n\
	 gg:table 61;\n\
	 gg:price 2822;\n\
	 gg:x 6.04;\n\
	 gg:y 6.03;\n\
	 gg:z 3.86.\n\
gg:501 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.2;\n\
	 gg:table 56;\n\
	 gg:price 2822;\n\
	 gg:x 5.86;\n\
	 gg:y 5.83;\n\
	 gg:z 3.52.\n\
gg:502 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 59;\n\
	 gg:price 2822;\n\
	 gg:x 5.73;\n\
	 gg:y 5.68;\n\
	 gg:z 3.51.\n\
gg:503 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 56;\n\
	 gg:price 2822;\n\
	 gg:x 5.71;\n\
	 gg:y 5.66;\n\
	 gg:z 3.56.\n\
gg:504 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.7;\n\
	 gg:table 58;\n\
	 gg:price 2822;\n\
	 gg:x 5.82;\n\
	 gg:y 5.77;\n\
	 gg:z 3.46.\n\
gg:505 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 64;\n\
	 gg:price 2822;\n\
	 gg:x 5.71;\n\
	 gg:y 5.66;\n\
	 gg:z 3.49.\n\
gg:506 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2822;\n\
	 gg:x 5.62;\n\
	 gg:y 5.59;\n\
	 gg:z 3.51.\n\
gg:507 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2822;\n\
	 gg:x 5.73;\n\
	 gg:y 5.63;\n\
	 gg:z 3.51.\n\
gg:508 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 62;\n\
	 gg:price 2822;\n\
	 gg:x 5.72;\n\
	 gg:y 5.68;\n\
	 gg:z 3.46.\n\
gg:509 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.6;\n\
	 gg:table 58;\n\
	 gg:price 2822;\n\
	 gg:x 5.8;\n\
	 gg:y 5.72;\n\
	 gg:z 3.49.\n\
gg:510 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 54;\n\
	 gg:price 2822;\n\
	 gg:x 5.75;\n\
	 gg:y 5.71;\n\
	 gg:z 3.52.\n\
gg:511 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 59;\n\
	 gg:price 2823;\n\
	 gg:x 5.86;\n\
	 gg:y 5.9;\n\
	 gg:z 3.69.\n\
gg:512 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.8;\n\
	 gg:table 57;\n\
	 gg:price 2823;\n\
	 gg:x 6.06;\n\
	 gg:y 6.13;\n\
	 gg:z 3.89.\n\
gg:513 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2823;\n\
	 gg:x 5.71;\n\
	 gg:y 5.66;\n\
	 gg:z 3.54.\n\
gg:514 a gg:Diamond ;\n\
	 gg:carat 0.61;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 54;\n\
	 gg:price 2823;\n\
	 gg:x 5.51;\n\
	 gg:y 5.59;\n\
	 gg:z 3.4.\n\
gg:515 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 65.8;\n\
	 gg:table 54;\n\
	 gg:price 2823;\n\
	 gg:x 6.05;\n\
	 gg:y 5.98;\n\
	 gg:z 3.96.\n\
gg:516 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.5;\n\
	 gg:table 56;\n\
	 gg:price 2823;\n\
	 gg:x 5.77;\n\
	 gg:y 5.73;\n\
	 gg:z 3.47.\n\
gg:517 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.2;\n\
	 gg:table 59;\n\
	 gg:price 2824;\n\
	 gg:x 5.74;\n\
	 gg:y 5.69;\n\
	 gg:z 3.5.\n\
gg:518 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 57;\n\
	 gg:price 2824;\n\
	 gg:x 5.84;\n\
	 gg:y 5.86;\n\
	 gg:z 3.63.\n\
gg:519 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 58;\n\
	 gg:price 2824;\n\
	 gg:x 5.73;\n\
	 gg:y 5.75;\n\
	 gg:z 3.62.\n\
gg:520 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 54;\n\
	 gg:price 2824;\n\
	 gg:x 6.02;\n\
	 gg:y 5.97;\n\
	 gg:z 3.74.\n\
gg:521 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.8;\n\
	 gg:table 60;\n\
	 gg:price 2824;\n\
	 gg:x 6.05;\n\
	 gg:y 6.03;\n\
	 gg:z 3.67.\n\
gg:522 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 59;\n\
	 gg:price 2825;\n\
	 gg:x 5.73;\n\
	 gg:y 5.66;\n\
	 gg:z 3.54.\n\
gg:523 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60;\n\
	 gg:table 59;\n\
	 gg:price 2825;\n\
	 gg:x 6.08;\n\
	 gg:y 6.05;\n\
	 gg:z 3.64.\n\
gg:524 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62;\n\
	 gg:table 57;\n\
	 gg:price 2825;\n\
	 gg:x 5.75;\n\
	 gg:y 5.8;\n\
	 gg:z 3.58.\n\
gg:525 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 59;\n\
	 gg:price 2825;\n\
	 gg:x 6.02;\n\
	 gg:y 5.95;\n\
	 gg:z 3.74.\n\
gg:526 a gg:Diamond ;\n\
	 gg:carat 1.17;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.2;\n\
	 gg:table 61;\n\
	 gg:price 2825;\n\
	 gg:x 6.9;\n\
	 gg:y 6.83;\n\
	 gg:z 4.13.\n\
gg:527 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 67;\n\
	 gg:price 2825;\n\
	 gg:x 6.24;\n\
	 gg:y 6.19;\n\
	 gg:z 3.81.\n\
gg:528 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 60;\n\
	 gg:price 2826;\n\
	 gg:x 5.75;\n\
	 gg:y 5.68;\n\
	 gg:z 3.58.\n\
gg:529 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 57.2;\n\
	 gg:table 59;\n\
	 gg:price 2826;\n\
	 gg:x 5.94;\n\
	 gg:y 5.88;\n\
	 gg:z 3.38.\n\
gg:530 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 59;\n\
	 gg:price 2826;\n\
	 gg:x 6.11;\n\
	 gg:y 6.07;\n\
	 gg:z 3.79.\n\
gg:531 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 58;\n\
	 gg:price 2826;\n\
	 gg:x 5.66;\n\
	 gg:y 5.6;\n\
	 gg:z 3.5.\n\
gg:532 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.3;\n\
	 gg:table 56;\n\
	 gg:price 2826;\n\
	 gg:x 5.6;\n\
	 gg:y 5.58;\n\
	 gg:z 3.54.\n\
gg:533 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.4;\n\
	 gg:table 61;\n\
	 gg:price 2826;\n\
	 gg:x 5.78;\n\
	 gg:y 5.74;\n\
	 gg:z 3.42.\n\
gg:534 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.5;\n\
	 gg:table 56;\n\
	 gg:price 2826;\n\
	 gg:x 6.17;\n\
	 gg:y 6.07;\n\
	 gg:z 3.88.\n\
gg:535 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 60;\n\
	 gg:price 2826;\n\
	 gg:x 5.97;\n\
	 gg:y 5.94;\n\
	 gg:z 3.62.\n\
gg:536 a gg:Diamond ;\n\
	 gg:carat 0.96;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 55;\n\
	 gg:price 2826;\n\
	 gg:x 6.41;\n\
	 gg:y 6.37;\n\
	 gg:z 3.88.\n\
gg:537 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 59;\n\
	 gg:price 2827;\n\
	 gg:x 5.67;\n\
	 gg:y 5.7;\n\
	 gg:z 3.54.\n\
gg:538 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64;\n\
	 gg:table 54;\n\
	 gg:price 2827;\n\
	 gg:x 5.68;\n\
	 gg:y 5.7;\n\
	 gg:z 3.64.\n\
gg:539 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 2827;\n\
	 gg:x 5.96;\n\
	 gg:y 5.9;\n\
	 gg:z 3.71.\n\
gg:540 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 57;\n\
	 gg:price 2827;\n\
	 gg:x 5.69;\n\
	 gg:y 5.74;\n\
	 gg:z 3.52.\n\
gg:541 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 55;\n\
	 gg:price 2827;\n\
	 gg:x 5.66;\n\
	 gg:y 5.7;\n\
	 gg:z 3.54.\n\
gg:542 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.6;\n\
	 gg:table 57;\n\
	 gg:price 2828;\n\
	 gg:x 5.74;\n\
	 gg:y 5.77;\n\
	 gg:z 3.49.\n\
gg:543 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 61;\n\
	 gg:price 2828;\n\
	 gg:x 6.39;\n\
	 gg:y 6.31;\n\
	 gg:z 3.91.\n\
gg:544 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 58;\n\
	 gg:price 2829;\n\
	 gg:x 5.75;\n\
	 gg:y 5.7;\n\
	 gg:z 3.56.\n\
gg:545 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.7;\n\
	 gg:table 54;\n\
	 gg:price 2829;\n\
	 gg:x 5.91;\n\
	 gg:y 5.87;\n\
	 gg:z 3.75.\n\
gg:546 a gg:Diamond ;\n\
	 gg:carat 0.59;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62;\n\
	 gg:table 56;\n\
	 gg:price 2829;\n\
	 gg:x 5.36;\n\
	 gg:y 5.38;\n\
	 gg:z 3.33.\n\
gg:547 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 57;\n\
	 gg:price 2829;\n\
	 gg:x 5.77;\n\
	 gg:y 5.74;\n\
	 gg:z 3.55.\n\
gg:548 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 57;\n\
	 gg:price 2829;\n\
	 gg:x 5.88;\n\
	 gg:y 5.82;\n\
	 gg:z 3.62.\n\
gg:549 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.2;\n\
	 gg:table 57;\n\
	 gg:price 2829;\n\
	 gg:x 6.05;\n\
	 gg:y 6.01;\n\
	 gg:z 3.63.\n\
gg:550 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 59;\n\
	 gg:price 2830;\n\
	 gg:x 5.65;\n\
	 gg:y 5.7;\n\
	 gg:z 3.56.\n\
gg:551 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 56;\n\
	 gg:price 2830;\n\
	 gg:x 5.84;\n\
	 gg:y 5.89;\n\
	 gg:z 3.62.\n\
gg:552 a gg:Diamond ;\n\
	 gg:carat 0.97;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2830;\n\
	 gg:x 6.41;\n\
	 gg:y 6.43;\n\
	 gg:z 3.9.\n\
gg:553 a gg:Diamond ;\n\
	 gg:carat 0.53;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 2830;\n\
	 gg:x 5.23;\n\
	 gg:y 5.29;\n\
	 gg:z 3.19.\n\
gg:554 a gg:Diamond ;\n\
	 gg:carat 0.53;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 57;\n\
	 gg:price 2830;\n\
	 gg:x 5.16;\n\
	 gg:y 5.19;\n\
	 gg:z 3.2.\n\
gg:555 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 54.4;\n\
	 gg:price 2830;\n\
	 gg:x 5.94;\n\
	 gg:y 5.99;\n\
	 gg:z 3.7.\n\
gg:556 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.6;\n\
	 gg:table 62;\n\
	 gg:price 2830;\n\
	 gg:x 6.21;\n\
	 gg:y 6.13;\n\
	 gg:z 3.74.\n\
gg:557 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.8;\n\
	 gg:table 60;\n\
	 gg:price 2831;\n\
	 gg:x 5.89;\n\
	 gg:y 5.98;\n\
	 gg:z 3.61.\n\
gg:558 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 57;\n\
	 gg:price 2831;\n\
	 gg:x 5.7;\n\
	 gg:y 5.76;\n\
	 gg:z 3.57.\n\
gg:559 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 57;\n\
	 gg:price 2831;\n\
	 gg:x 5.82;\n\
	 gg:y 5.87;\n\
	 gg:z 3.59.\n\
gg:560 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 58;\n\
	 gg:price 2831;\n\
	 gg:x 5.73;\n\
	 gg:y 5.76;\n\
	 gg:z 3.57.\n\
gg:561 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2831;\n\
	 gg:x 5.93;\n\
	 gg:y 5.91;\n\
	 gg:z 3.66.\n\
gg:562 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 58;\n\
	 gg:price 2832;\n\
	 gg:x 5.71;\n\
	 gg:y 5.75;\n\
	 gg:z 3.58.\n\
gg:563 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 61;\n\
	 gg:price 2832;\n\
	 gg:x 6.15;\n\
	 gg:y 6.18;\n\
	 gg:z 3.87.\n\
gg:564 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 57;\n\
	 gg:price 2832;\n\
	 gg:x 5.75;\n\
	 gg:y 5.65;\n\
	 gg:z 3.54.\n\
gg:565 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63;\n\
	 gg:table 60;\n\
	 gg:price 2832;\n\
	 gg:x 5.87;\n\
	 gg:y 5.81;\n\
	 gg:z 3.68.\n\
gg:566 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2832;\n\
	 gg:x 5.91;\n\
	 gg:y 5.97;\n\
	 gg:z 3.71.\n\
gg:567 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 58;\n\
	 gg:price 2832;\n\
	 gg:x 5.72;\n\
	 gg:y 5.66;\n\
	 gg:z 3.54.\n\
gg:568 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 64.3;\n\
	 gg:table 63;\n\
	 gg:price 2832;\n\
	 gg:x 6.05;\n\
	 gg:y 6.01;\n\
	 gg:z 3.88.\n\
gg:569 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62;\n\
	 gg:table 58;\n\
	 gg:price 2833;\n\
	 gg:x 5.86;\n\
	 gg:y 5.95;\n\
	 gg:z 3.66.\n\
gg:570 a gg:Diamond ;\n\
	 gg:carat 0.56;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 61;\n\
	 gg:table 59;\n\
	 gg:price 2833;\n\
	 gg:x 5.28;\n\
	 gg:y 5.34;\n\
	 gg:z 3.24.\n\
gg:571 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.6;\n\
	 gg:table 61;\n\
	 gg:price 2833;\n\
	 gg:x 5.77;\n\
	 gg:y 5.8;\n\
	 gg:z 3.45.\n\
gg:572 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2833;\n\
	 gg:x 5.74;\n\
	 gg:y 5.76;\n\
	 gg:z 3.51.\n\
gg:573 a gg:Diamond ;\n\
	 gg:carat 0.61;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 55;\n\
	 gg:price 2833;\n\
	 gg:x 5.45;\n\
	 gg:y 5.48;\n\
	 gg:z 3.37.\n\
gg:574 a gg:Diamond ;\n\
	 gg:carat 0.85;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2833;\n\
	 gg:x 6.02;\n\
	 gg:y 6.07;\n\
	 gg:z 3.78.\n\
gg:575 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 57;\n\
	 gg:price 2833;\n\
	 gg:x 5.73;\n\
	 gg:y 5.75;\n\
	 gg:z 3.49.\n\
gg:576 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 56;\n\
	 gg:price 2834;\n\
	 gg:x 5.94;\n\
	 gg:y 5.87;\n\
	 gg:z 3.67.\n\
gg:577 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 57;\n\
	 gg:price 2834;\n\
	 gg:x 5.91;\n\
	 gg:y 5.87;\n\
	 gg:z 3.7.\n\
gg:578 a gg:Diamond ;\n\
	 gg:carat 0.51;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 59.9;\n\
	 gg:table 58;\n\
	 gg:price 2834;\n\
	 gg:x 5.16;\n\
	 gg:y 5.19;\n\
	 gg:z 3.1.\n\
gg:579 a gg:Diamond ;\n\
	 gg:carat 0.53;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 57;\n\
	 gg:price 2834;\n\
	 gg:x 5.2;\n\
	 gg:y 5.23;\n\
	 gg:z 3.2.\n\
gg:580 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 55;\n\
	 gg:price 2834;\n\
	 gg:x 5.92;\n\
	 gg:y 5.95;\n\
	 gg:z 3.67.\n\
gg:581 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 54;\n\
	 gg:price 2834;\n\
	 gg:x 6.17;\n\
	 gg:y 6.14;\n\
	 gg:z 3.9.\n\
gg:582 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 65.3;\n\
	 gg:table 59;\n\
	 gg:price 2834;\n\
	 gg:x 6.07;\n\
	 gg:y 6;\n\
	 gg:z 3.94.\n\
gg:583 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 55;\n\
	 gg:price 2834;\n\
	 gg:x 6.01;\n\
	 gg:y 5.95;\n\
	 gg:z 3.63.\n\
gg:584 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 56;\n\
	 gg:price 2835;\n\
	 gg:x 5.89;\n\
	 gg:y 5.81;\n\
	 gg:z 3.58.\n\
gg:585 a gg:Diamond ;\n\
	 gg:carat 0.63;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 57;\n\
	 gg:price 2835;\n\
	 gg:x 5.47;\n\
	 gg:y 5.51;\n\
	 gg:z 3.4.\n\
gg:586 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 54;\n\
	 gg:price 2835;\n\
	 gg:x 5.7;\n\
	 gg:y 5.75;\n\
	 gg:z 3.52.\n\
gg:587 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 57;\n\
	 gg:price 2835;\n\
	 gg:x 5.71;\n\
	 gg:y 5.73;\n\
	 gg:z 3.59.\n\
gg:588 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2835;\n\
	 gg:x 5.78;\n\
	 gg:y 5.8;\n\
	 gg:z 3.53.\n\
gg:589 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.6;\n\
	 gg:table 59;\n\
	 gg:price 2835;\n\
	 gg:x 6.04;\n\
	 gg:y 5.94;\n\
	 gg:z 3.57.\n\
gg:590 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2836;\n\
	 gg:x 6.04;\n\
	 gg:y 6.06;\n\
	 gg:z 3.67.\n\
gg:591 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 60;\n\
	 gg:price 2836;\n\
	 gg:x 5.6;\n\
	 gg:y 5.65;\n\
	 gg:z 3.53.\n\
gg:592 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 59;\n\
	 gg:price 2837;\n\
	 gg:x 5.69;\n\
	 gg:y 5.66;\n\
	 gg:z 3.55.\n\
gg:593 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2837;\n\
	 gg:x 5.74;\n\
	 gg:y 5.69;\n\
	 gg:z 3.53.\n\
gg:594 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.8;\n\
	 gg:table 53;\n\
	 gg:price 2838;\n\
	 gg:x 5.86;\n\
	 gg:y 5.82;\n\
	 gg:z 3.49.\n\
gg:595 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 55;\n\
	 gg:price 2838;\n\
	 gg:x 5.92;\n\
	 gg:y 5.94;\n\
	 gg:z 3.61.\n\
gg:596 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 64.9;\n\
	 gg:table 58;\n\
	 gg:price 2838;\n\
	 gg:x 5.83;\n\
	 gg:y 5.79;\n\
	 gg:z 3.77.\n\
gg:597 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 58.8;\n\
	 gg:table 60;\n\
	 gg:price 2838;\n\
	 gg:x 5.91;\n\
	 gg:y 5.89;\n\
	 gg:z 3.47.\n\
gg:598 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2838;\n\
	 gg:x 5.72;\n\
	 gg:y 5.64;\n\
	 gg:z 3.54.\n\
gg:599 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 58;\n\
	 gg:price 2838;\n\
	 gg:x 5.69;\n\
	 gg:y 5.63;\n\
	 gg:z 3.49.\n\
gg:600 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 55;\n\
	 gg:price 2838;\n\
	 gg:x 5.73;\n\
	 gg:y 5.64;\n\
	 gg:z 3.56.\n\
gg:601 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.4;\n\
	 gg:table 61;\n\
	 gg:price 2838;\n\
	 gg:x 5.83;\n\
	 gg:y 5.79;\n\
	 gg:z 3.45.\n\
gg:602 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 59;\n\
	 gg:price 2838;\n\
	 gg:x 5.53;\n\
	 gg:y 5.49;\n\
	 gg:z 3.5.\n\
gg:603 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.9;\n\
	 gg:table 61;\n\
	 gg:price 2838;\n\
	 gg:x 5.71;\n\
	 gg:y 5.66;\n\
	 gg:z 3.46.\n\
gg:604 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.5;\n\
	 gg:table 58;\n\
	 gg:price 2838;\n\
	 gg:x 5.85;\n\
	 gg:y 5.75;\n\
	 gg:z 3.45.\n\
gg:605 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63;\n\
	 gg:table 60;\n\
	 gg:price 2838;\n\
	 gg:x 5.64;\n\
	 gg:y 5.57;\n\
	 gg:z 3.53.\n\
gg:606 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60;\n\
	 gg:table 57;\n\
	 gg:price 2839;\n\
	 gg:x 5.85;\n\
	 gg:y 5.89;\n\
	 gg:z 3.52.\n\
gg:607 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 57;\n\
	 gg:price 2839;\n\
	 gg:x 5.74;\n\
	 gg:y 5.71;\n\
	 gg:z 3.52.\n\
gg:608 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 54;\n\
	 gg:price 2839;\n\
	 gg:x 5.75;\n\
	 gg:y 5.72;\n\
	 gg:z 3.53.\n\
gg:609 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 55;\n\
	 gg:price 2839;\n\
	 gg:x 5.82;\n\
	 gg:y 5.68;\n\
	 gg:z 3.57.\n\
gg:610 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.1;\n\
	 gg:table 61;\n\
	 gg:price 2839;\n\
	 gg:x 5.84;\n\
	 gg:y 5.81;\n\
	 gg:z 3.44.\n\
gg:611 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59;\n\
	 gg:table 60;\n\
	 gg:price 2839;\n\
	 gg:x 5.82;\n\
	 gg:y 5.8;\n\
	 gg:z 3.43.\n\
gg:612 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.5;\n\
	 gg:table 58;\n\
	 gg:price 2839;\n\
	 gg:x 5.75;\n\
	 gg:y 5.72;\n\
	 gg:z 3.47.\n\
gg:613 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 53;\n\
	 gg:price 2839;\n\
	 gg:x 5.73;\n\
	 gg:y 5.71;\n\
	 gg:z 3.57.\n\
gg:614 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 54;\n\
	 gg:price 2839;\n\
	 gg:x 5.8;\n\
	 gg:y 5.82;\n\
	 gg:z 3.59.\n\
gg:615 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 54;\n\
	 gg:price 2839;\n\
	 gg:x 5.69;\n\
	 gg:y 5.72;\n\
	 gg:z 3.54.\n\
gg:616 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 57;\n\
	 gg:price 2839;\n\
	 gg:x 5.71;\n\
	 gg:y 5.74;\n\
	 gg:z 3.51.\n\
gg:617 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.3;\n\
	 gg:table 58;\n\
	 gg:price 2839;\n\
	 gg:x 5.82;\n\
	 gg:y 5.78;\n\
	 gg:z 3.5.\n\
gg:618 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59.2;\n\
	 gg:table 58;\n\
	 gg:price 2839;\n\
	 gg:x 5.87;\n\
	 gg:y 5.82;\n\
	 gg:z 3.46.\n\
gg:619 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.3;\n\
	 gg:table 62;\n\
	 gg:price 2839;\n\
	 gg:x 6.09;\n\
	 gg:y 6.01;\n\
	 gg:z 3.59.\n\
gg:620 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 59;\n\
	 gg:price 2839;\n\
	 gg:x 5.7;\n\
	 gg:y 5.62;\n\
	 gg:z 3.55.\n\
gg:621 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61;\n\
	 gg:table 60;\n\
	 gg:price 2840;\n\
	 gg:x 5.9;\n\
	 gg:y 5.87;\n\
	 gg:z 3.59.\n\
gg:622 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.8;\n\
	 gg:table 56;\n\
	 gg:price 2840;\n\
	 gg:x 5.85;\n\
	 gg:y 5.92;\n\
	 gg:z 3.52.\n\
gg:623 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 56;\n\
	 gg:price 2840;\n\
	 gg:x 5.75;\n\
	 gg:y 5.8;\n\
	 gg:z 3.52.\n\
gg:624 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.3;\n\
	 gg:table 56;\n\
	 gg:price 2840;\n\
	 gg:x 5.88;\n\
	 gg:y 5.82;\n\
	 gg:z 3.47.\n\
gg:625 a gg:Diamond ;\n\
	 gg:carat 0.92;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 56;\n\
	 gg:price 2840;\n\
	 gg:x 6.27;\n\
	 gg:y 6.2;\n\
	 gg:z 3.86.\n\
gg:626 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 59;\n\
	 gg:price 2840;\n\
	 gg:x 6.08;\n\
	 gg:y 6.04;\n\
	 gg:z 3.72.\n\
gg:627 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 59.2;\n\
	 gg:table 60;\n\
	 gg:price 2840;\n\
	 gg:x 5.87;\n\
	 gg:y 5.78;\n\
	 gg:z 3.45.\n\
gg:628 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.3;\n\
	 gg:table 59;\n\
	 gg:price 2841;\n\
	 gg:x 5.9;\n\
	 gg:y 5.87;\n\
	 gg:z 3.55.\n\
gg:629 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 55;\n\
	 gg:price 2841;\n\
	 gg:x 5.69;\n\
	 gg:y 5.61;\n\
	 gg:z 3.58.\n\
gg:630 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.9;\n\
	 gg:table 57;\n\
	 gg:price 2841;\n\
	 gg:x 5.66;\n\
	 gg:y 5.71;\n\
	 gg:z 3.63.\n\
gg:631 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 53;\n\
	 gg:price 2841;\n\
	 gg:x 6;\n\
	 gg:y 6.12;\n\
	 gg:z 3.74.\n\
gg:632 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 56;\n\
	 gg:price 2841;\n\
	 gg:x 5.96;\n\
	 gg:y 6.02;\n\
	 gg:z 3.73.\n\
gg:633 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.7;\n\
	 gg:table 57;\n\
	 gg:price 2841;\n\
	 gg:x 6.12;\n\
	 gg:y 6.14;\n\
	 gg:z 3.66.\n\
gg:634 a gg:Diamond ;\n\
	 gg:carat 0.52;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 56;\n\
	 gg:price 2841;\n\
	 gg:x 5.19;\n\
	 gg:y 5.21;\n\
	 gg:z 3.18.\n\
gg:635 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 58.9;\n\
	 gg:table 60;\n\
	 gg:price 2841;\n\
	 gg:x 6.6;\n\
	 gg:y 6.55;\n\
	 gg:z 3.87.\n\
gg:636 a gg:Diamond ;\n\
	 gg:carat 0.95;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 66.7;\n\
	 gg:table 56;\n\
	 gg:price 2841;\n\
	 gg:x 6.16;\n\
	 gg:y 6.03;\n\
	 gg:z 4.06.\n\
gg:637 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 57;\n\
	 gg:price 2841;\n\
	 gg:x 5.76;\n\
	 gg:y 5.8;\n\
	 gg:z 3.55.\n\
gg:638 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.9;\n\
	 gg:table 59;\n\
	 gg:price 2841;\n\
	 gg:x 5.87;\n\
	 gg:y 5.77;\n\
	 gg:z 3.5.\n\
gg:639 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 58;\n\
	 gg:price 2841;\n\
	 gg:x 5.82;\n\
	 gg:y 5.77;\n\
	 gg:z 3.56.\n\
gg:640 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 54;\n\
	 gg:price 2842;\n\
	 gg:x 5.92;\n\
	 gg:y 5.96;\n\
	 gg:z 3.72.\n\
gg:641 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58.7;\n\
	 gg:table 61;\n\
	 gg:price 2842;\n\
	 gg:x 5.8;\n\
	 gg:y 5.72;\n\
	 gg:z 3.38.\n\
gg:642 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.2;\n\
	 gg:table 62;\n\
	 gg:price 2843;\n\
	 gg:x 5.71;\n\
	 gg:y 5.75;\n\
	 gg:z 3.45.\n\
gg:643 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.7;\n\
	 gg:table 58;\n\
	 gg:price 2843;\n\
	 gg:x 5.65;\n\
	 gg:y 5.67;\n\
	 gg:z 3.55.\n\
gg:644 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.4;\n\
	 gg:table 58;\n\
	 gg:price 2843;\n\
	 gg:x 5.76;\n\
	 gg:y 5.82;\n\
	 gg:z 3.44.\n\
gg:645 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.2;\n\
	 gg:table 58;\n\
	 gg:price 2843;\n\
	 gg:x 5.91;\n\
	 gg:y 5.92;\n\
	 gg:z 3.74.\n\
gg:646 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 58;\n\
	 gg:price 2843;\n\
	 gg:x 5.73;\n\
	 gg:y 5.79;\n\
	 gg:z 3.54.\n\
gg:647 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 57;\n\
	 gg:price 2843;\n\
	 gg:x 5.81;\n\
	 gg:y 5.84;\n\
	 gg:z 3.57.\n\
gg:648 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 59;\n\
	 gg:price 2843;\n\
	 gg:x 5.73;\n\
	 gg:y 5.79;\n\
	 gg:z 3.56.\n\
gg:649 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62;\n\
	 gg:table 57;\n\
	 gg:price 2843;\n\
	 gg:x 5.71;\n\
	 gg:y 5.74;\n\
	 gg:z 3.55.\n\
gg:650 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 57;\n\
	 gg:price 2843;\n\
	 gg:x 5.91;\n\
	 gg:y 5.95;\n\
	 gg:z 3.68.\n\
gg:651 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.7;\n\
	 gg:table 57;\n\
	 gg:price 2843;\n\
	 gg:x 5.81;\n\
	 gg:y 5.78;\n\
	 gg:z 3.52.\n\
gg:652 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 57.7;\n\
	 gg:table 61;\n\
	 gg:price 2844;\n\
	 gg:x 5.92;\n\
	 gg:y 5.96;\n\
	 gg:z 3.43.\n\
gg:653 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62;\n\
	 gg:table 59;\n\
	 gg:price 2844;\n\
	 gg:x 5.65;\n\
	 gg:y 5.68;\n\
	 gg:z 3.51.\n\
gg:654 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 57;\n\
	 gg:price 2844;\n\
	 gg:x 6.45;\n\
	 gg:y 6.46;\n\
	 gg:z 3.97.\n\
gg:655 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 57;\n\
	 gg:price 2844;\n\
	 gg:x 6.35;\n\
	 gg:y 6.39;\n\
	 gg:z 4.02.\n\
gg:656 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2844;\n\
	 gg:x 5.91;\n\
	 gg:y 5.93;\n\
	 gg:z 3.7.\n\
gg:657 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 59;\n\
	 gg:price 2845;\n\
	 gg:x 5.65;\n\
	 gg:y 5.68;\n\
	 gg:z 3.5.\n\
gg:658 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58.9;\n\
	 gg:table 60;\n\
	 gg:price 2845;\n\
	 gg:x 5.83;\n\
	 gg:y 5.85;\n\
	 gg:z 3.44.\n\
gg:659 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.4;\n\
	 gg:table 60;\n\
	 gg:price 2845;\n\
	 gg:x 5.92;\n\
	 gg:y 5.82;\n\
	 gg:z 3.72.\n\
gg:660 a gg:Diamond ;\n\
	 gg:carat 1.27;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.3;\n\
	 gg:table 61;\n\
	 gg:price 2845;\n\
	 gg:x 7.12;\n\
	 gg:y 7.05;\n\
	 gg:z 4.2.\n\
gg:661 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2846;\n\
	 gg:x 5.96;\n\
	 gg:y 5.91;\n\
	 gg:z 3.65.\n\
gg:662 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.2;\n\
	 gg:table 59;\n\
	 gg:price 2846;\n\
	 gg:x 5.79;\n\
	 gg:y 5.84;\n\
	 gg:z 3.5.\n\
gg:663 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2846;\n\
	 gg:x 5.79;\n\
	 gg:y 5.84;\n\
	 gg:z 3.58.\n\
gg:664 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 65.4;\n\
	 gg:table 59;\n\
	 gg:price 2846;\n\
	 gg:x 6.3;\n\
	 gg:y 6.26;\n\
	 gg:z 4.11.\n\
gg:665 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 64.2;\n\
	 gg:table 61;\n\
	 gg:price 2846;\n\
	 gg:x 6.25;\n\
	 gg:y 6.18;\n\
	 gg:z 3.99.\n\
gg:666 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.1;\n\
	 gg:table 59;\n\
	 gg:price 2846;\n\
	 gg:x 5.92;\n\
	 gg:y 5.95;\n\
	 gg:z 3.51.\n\
gg:667 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 57;\n\
	 gg:price 2846;\n\
	 gg:x 5.71;\n\
	 gg:y 5.76;\n\
	 gg:z 3.53.\n\
gg:668 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.1;\n\
	 gg:table 61;\n\
	 gg:price 2846;\n\
	 gg:x 5.76;\n\
	 gg:y 5.84;\n\
	 gg:z 3.43.\n\
gg:669 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 59;\n\
	 gg:price 2846;\n\
	 gg:x 5.84;\n\
	 gg:y 5.79;\n\
	 gg:z 3.66.\n\
gg:670 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 60;\n\
	 gg:price 2846;\n\
	 gg:x 5.91;\n\
	 gg:y 5.81;\n\
	 gg:z 3.59.\n\
gg:671 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 58;\n\
	 gg:price 2846;\n\
	 gg:x 5.94;\n\
	 gg:y 5.89;\n\
	 gg:z 3.63.\n\
gg:672 a gg:Diamond ;\n\
	 gg:carat 0.84;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 57;\n\
	 gg:price 2847;\n\
	 gg:x 6.1;\n\
	 gg:y 6.12;\n\
	 gg:z 3.74.\n\
gg:673 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.3;\n\
	 gg:table 57;\n\
	 gg:price 2847;\n\
	 gg:x 5.83;\n\
	 gg:y 5.85;\n\
	 gg:z 3.52.\n\
gg:674 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.1;\n\
	 gg:table 59;\n\
	 gg:price 2847;\n\
	 gg:x 5.93;\n\
	 gg:y 5.88;\n\
	 gg:z 3.61.\n\
gg:675 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.9;\n\
	 gg:table 59;\n\
	 gg:price 2848;\n\
	 gg:x 5.61;\n\
	 gg:y 5.68;\n\
	 gg:z 3.55.\n\
gg:676 a gg:Diamond ;\n\
	 gg:carat 0.54;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 55;\n\
	 gg:price 2848;\n\
	 gg:x 5.25;\n\
	 gg:y 5.29;\n\
	 gg:z 3.24.\n\
gg:677 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 64.6;\n\
	 gg:table 57;\n\
	 gg:price 2848;\n\
	 gg:x 5.74;\n\
	 gg:y 5.72;\n\
	 gg:z 3.7.\n\
gg:678 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 64.1;\n\
	 gg:table 54;\n\
	 gg:price 2849;\n\
	 gg:x 5.86;\n\
	 gg:y 5.84;\n\
	 gg:z 3.75.\n\
gg:679 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 58;\n\
	 gg:price 2849;\n\
	 gg:x 5.75;\n\
	 gg:y 5.73;\n\
	 gg:z 3.62.\n\
gg:680 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61;\n\
	 gg:table 60;\n\
	 gg:price 2850;\n\
	 gg:x 5.74;\n\
	 gg:y 5.77;\n\
	 gg:z 3.51.\n\
gg:681 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.8;\n\
	 gg:table 59;\n\
	 gg:price 2850;\n\
	 gg:x 5.69;\n\
	 gg:y 5.79;\n\
	 gg:z 3.49.\n\
gg:682 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2850;\n\
	 gg:x 5.83;\n\
	 gg:y 5.87;\n\
	 gg:z 3.6.\n\
gg:683 a gg:Diamond ;\n\
	 gg:carat 1.2;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 60;\n\
	 gg:price 2850;\n\
	 gg:x 6.75;\n\
	 gg:y 6.67;\n\
	 gg:z 4.23.\n\
gg:684 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 57;\n\
	 gg:price 2851;\n\
	 gg:x 5.89;\n\
	 gg:y 5.82;\n\
	 gg:z 3.71.\n\
gg:685 a gg:Diamond ;\n\
	 gg:carat 0.66;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 56;\n\
	 gg:price 2851;\n\
	 gg:x 5.54;\n\
	 gg:y 5.57;\n\
	 gg:z 3.45.\n\
gg:686 a gg:Diamond ;\n\
	 gg:carat 0.87;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61;\n\
	 gg:table 63;\n\
	 gg:price 2851;\n\
	 gg:x 6.22;\n\
	 gg:y 6.07;\n\
	 gg:z 3.75.\n\
gg:687 a gg:Diamond ;\n\
	 gg:carat 0.86;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 59;\n\
	 gg:price 2851;\n\
	 gg:x 6.04;\n\
	 gg:y 5.98;\n\
	 gg:z 3.77.\n\
gg:688 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2851;\n\
	 gg:x 5.85;\n\
	 gg:y 5.81;\n\
	 gg:z 3.56.\n\
gg:689 a gg:Diamond ;\n\
	 gg:carat 0.58;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 60.6;\n\
	 gg:table 59;\n\
	 gg:price 2852;\n\
	 gg:x 5.37;\n\
	 gg:y 5.43;\n\
	 gg:z 3.27.\n\
gg:690 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 57;\n\
	 gg:price 2852;\n\
	 gg:x 5.88;\n\
	 gg:y 5.92;\n\
	 gg:z 3.63.\n\
gg:691 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 55;\n\
	 gg:price 2852;\n\
	 gg:x 5.85;\n\
	 gg:y 5.86;\n\
	 gg:z 3.59.\n\
gg:692 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 55;\n\
	 gg:price 2852;\n\
	 gg:x 5.7;\n\
	 gg:y 5.79;\n\
	 gg:z 3.6.\n\
gg:693 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 57;\n\
	 gg:price 2852;\n\
	 gg:x 6.12;\n\
	 gg:y 6.07;\n\
	 gg:z 3.87.\n\
gg:694 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 2853;\n\
	 gg:x 5.67;\n\
	 gg:y 5.7;\n\
	 gg:z 3.56.\n\
gg:695 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 55;\n\
	 gg:price 2853;\n\
	 gg:x 5.64;\n\
	 gg:y 5.66;\n\
	 gg:z 3.59.\n\
gg:696 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 57;\n\
	 gg:price 2853;\n\
	 gg:x 5.9;\n\
	 gg:y 5.85;\n\
	 gg:z 3.69.\n\
gg:697 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60;\n\
	 gg:table 60;\n\
	 gg:price 2853;\n\
	 gg:x 6.07;\n\
	 gg:y 6.03;\n\
	 gg:z 3.63.\n\
gg:698 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 58;\n\
	 gg:price 2853;\n\
	 gg:x 5.73;\n\
	 gg:y 5.66;\n\
	 gg:z 3.57.\n\
gg:699 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 58;\n\
	 gg:price 2853;\n\
	 gg:x 5.99;\n\
	 gg:y 5.97;\n\
	 gg:z 3.7.\n\
gg:700 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 57.1;\n\
	 gg:price 2854;\n\
	 gg:x 5.87;\n\
	 gg:y 5.95;\n\
	 gg:z 3.66.\n\
gg:701 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 56;\n\
	 gg:price 2854;\n\
	 gg:x 5.64;\n\
	 gg:y 5.7;\n\
	 gg:z 3.54.\n\
gg:702 a gg:Diamond ;\n\
	 gg:carat 1.12;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 59.1;\n\
	 gg:table 61;\n\
	 gg:price 2854;\n\
	 gg:x 6.78;\n\
	 gg:y 6.75;\n\
	 gg:z 4.\n\
gg:703 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62;\n\
	 gg:table 57;\n\
	 gg:price 2854;\n\
	 gg:x 5.86;\n\
	 gg:y 5.76;\n\
	 gg:z 3.6.\n\
gg:704 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.4;\n\
	 gg:table 62;\n\
	 gg:price 2854;\n\
	 gg:x 6.06;\n\
	 gg:y 6.03;\n\
	 gg:z 3.89.\n\
gg:705 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 65.4;\n\
	 gg:table 60;\n\
	 gg:price 2854;\n\
	 gg:x 6.04;\n\
	 gg:y 6;\n\
	 gg:z 3.94.\n\
gg:706 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.2;\n\
	 gg:table 58;\n\
	 gg:price 2854;\n\
	 gg:x 6.12;\n\
	 gg:y 6.09;\n\
	 gg:z 3.92.\n\
gg:707 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 65.8;\n\
	 gg:table 58;\n\
	 gg:price 2854;\n\
	 gg:x 6.04;\n\
	 gg:y 6.01;\n\
	 gg:z 3.96.\n\
gg:708 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 58.4;\n\
	 gg:table 59;\n\
	 gg:price 2854;\n\
	 gg:x 5.91;\n\
	 gg:y 5.83;\n\
	 gg:z 3.43.\n\
gg:709 a gg:Diamond ;\n\
	 gg:carat 0.68;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 57;\n\
	 gg:price 2854;\n\
	 gg:x 5.67;\n\
	 gg:y 5.64;\n\
	 gg:z 3.49.\n\
gg:710 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2855;\n\
	 gg:x 5.7;\n\
	 gg:y 5.75;\n\
	 gg:z 3.58.\n\
gg:711 a gg:Diamond ;\n\
	 gg:carat 1.03;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.6;\n\
	 gg:table 57;\n\
	 gg:price 2855;\n\
	 gg:x 6.38;\n\
	 gg:y 6.29;\n\
	 gg:z 4.03.\n\
gg:712 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 57;\n\
	 gg:price 2855;\n\
	 gg:x 5.8;\n\
	 gg:y 5.74;\n\
	 gg:z 3.6.\n\
gg:713 a gg:Diamond ;\n\
	 gg:carat 0.98;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 53.3;\n\
	 gg:table 67;\n\
	 gg:price 2855;\n\
	 gg:x 6.82;\n\
	 gg:y 6.74;\n\
	 gg:z 3.61.\n\
gg:714 a gg:Diamond ;\n\
	 gg:carat 1.02;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 53;\n\
	 gg:table 63;\n\
	 gg:price 2856;\n\
	 gg:x 6.84;\n\
	 gg:y 6.77;\n\
	 gg:z 3.66.\n\
gg:715 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 67.8;\n\
	 gg:table 61;\n\
	 gg:price 2856;\n\
	 gg:x 5.96;\n\
	 gg:y 5.9;\n\
	 gg:z 4.02.\n\
gg:716 a gg:Diamond ;\n\
	 gg:carat 1.02;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 55;\n\
	 gg:price 2856;\n\
	 gg:x 6.49;\n\
	 gg:y 6.43;\n\
	 gg:z 3.98.\n\
gg:717 a gg:Diamond ;\n\
	 gg:carat 0.6;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.8;\n\
	 gg:table 57;\n\
	 gg:price 2856;\n\
	 gg:x 5.44;\n\
	 gg:y 5.49;\n\
	 gg:z 3.32.\n\
gg:718 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2856;\n\
	 gg:x 5.97;\n\
	 gg:y 6.01;\n\
	 gg:z 3.69.\n\
gg:719 a gg:Diamond ;\n\
	 gg:carat 0.97;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2856;\n\
	 gg:x 6.43;\n\
	 gg:y 6.41;\n\
	 gg:z 3.9.\n\
gg:720 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 67.9;\n\
	 gg:table 62;\n\
	 gg:price 2856;\n\
	 gg:x 6.19;\n\
	 gg:y 6.03;\n\
	 gg:z 4.15.\n\
gg:721 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 57;\n\
	 gg:price 556;\n\
	 gg:x 4.05;\n\
	 gg:y 4.08;\n\
	 gg:z 2.53.\n\
gg:722 a gg:Diamond ;\n\
	 gg:carat 0.26;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 56;\n\
	 gg:price 556;\n\
	 gg:x 4.09;\n\
	 gg:y 4.12;\n\
	 gg:z 2.55.\n\
gg:723 a gg:Diamond ;\n\
	 gg:carat 0.36;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 55;\n\
	 gg:price 556;\n\
	 gg:x 4.57;\n\
	 gg:y 4.59;\n\
	 gg:z 2.83.\n\
gg:724 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 57.5;\n\
	 gg:table 61;\n\
	 gg:price 556;\n\
	 gg:x 4.6;\n\
	 gg:y 4.66;\n\
	 gg:z 2.66.\n\
gg:725 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.3;\n\
	 gg:table 57;\n\
	 gg:price 556;\n\
	 gg:x 4.44;\n\
	 gg:y 4.47;\n\
	 gg:z 2.82.\n\
gg:726 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.5;\n\
	 gg:table 55;\n\
	 gg:price 556;\n\
	 gg:x 4.44;\n\
	 gg:y 4.47;\n\
	 gg:z 2.83.\n\
gg:727 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.4;\n\
	 gg:table 55;\n\
	 gg:price 556;\n\
	 gg:x 4.44;\n\
	 gg:y 4.46;\n\
	 gg:z 2.82.\n\
gg:728 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.6;\n\
	 gg:table 62;\n\
	 gg:price 556;\n\
	 gg:x 4.54;\n\
	 gg:y 4.56;\n\
	 gg:z 2.71.\n\
gg:729 a gg:Diamond ;\n\
	 gg:carat 0.34;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 54;\n\
	 gg:price 556;\n\
	 gg:x 4.47;\n\
	 gg:y 4.5;\n\
	 gg:z 2.79.\n\
gg:730 a gg:Diamond ;\n\
	 gg:carat 0.32;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.1;\n\
	 gg:table 54;\n\
	 gg:price 556;\n\
	 gg:x 4.34;\n\
	 gg:y 4.37;\n\
	 gg:z 2.79.\n\
gg:731 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 55;\n\
	 gg:price 557;\n\
	 gg:x 4.36;\n\
	 gg:y 4.41;\n\
	 gg:z 2.7.\n\
gg:732 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 56;\n\
	 gg:price 557;\n\
	 gg:x 4.36;\n\
	 gg:y 4.38;\n\
	 gg:z 2.68.\n\
gg:733 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 54;\n\
	 gg:price 557;\n\
	 gg:x 4.37;\n\
	 gg:y 4.4;\n\
	 gg:z 2.73.\n\
gg:734 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62;\n\
	 gg:table 54;\n\
	 gg:price 557;\n\
	 gg:x 4.37;\n\
	 gg:y 4.4;\n\
	 gg:z 2.72.\n\
gg:735 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 53;\n\
	 gg:price 557;\n\
	 gg:x 4.33;\n\
	 gg:y 4.35;\n\
	 gg:z 2.72.\n\
gg:736 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 53;\n\
	 gg:price 557;\n\
	 gg:x 4.36;\n\
	 gg:y 4.38;\n\
	 gg:z 2.72.\n\
gg:737 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 53.6;\n\
	 gg:price 557;\n\
	 gg:x 4.32;\n\
	 gg:y 4.35;\n\
	 gg:z 2.7.\n\
gg:738 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 54.8;\n\
	 gg:price 557;\n\
	 gg:x 4.35;\n\
	 gg:y 4.37;\n\
	 gg:z 2.69.\n\
gg:739 a gg:Diamond ;\n\
	 gg:carat 0.31;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 54.2;\n\
	 gg:price 557;\n\
	 gg:x 4.33;\n\
	 gg:y 4.37;\n\
	 gg:z 2.69.\n\
gg:740 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.4;\n\
	 gg:table 59;\n\
	 gg:price 557;\n\
	 gg:x 4.52;\n\
	 gg:y 4.5;\n\
	 gg:z 2.68.\n\
gg:741 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 557;\n\
	 gg:x 4.43;\n\
	 gg:y 4.4;\n\
	 gg:z 2.75.\n\
gg:742 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 557;\n\
	 gg:x 4.42;\n\
	 gg:y 4.4;\n\
	 gg:z 2.76.\n\
gg:743 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 56;\n\
	 gg:price 557;\n\
	 gg:x 4.45;\n\
	 gg:y 4.41;\n\
	 gg:z 2.74.\n\
gg:744 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63;\n\
	 gg:table 58;\n\
	 gg:price 557;\n\
	 gg:x 4.42;\n\
	 gg:y 4.4;\n\
	 gg:z 2.78.\n\
gg:745 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 58;\n\
	 gg:price 557;\n\
	 gg:x 4.41;\n\
	 gg:y 4.38;\n\
	 gg:z 2.76.\n\
gg:746 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 61;\n\
	 gg:price 557;\n\
	 gg:x 4.46;\n\
	 gg:y 4.39;\n\
	 gg:z 2.72.\n\
gg:747 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 55;\n\
	 gg:price 557;\n\
	 gg:x 4.44;\n\
	 gg:y 4.41;\n\
	 gg:z 2.75.\n\
gg:748 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63;\n\
	 gg:table 57;\n\
	 gg:price 557;\n\
	 gg:x 4.39;\n\
	 gg:y 4.37;\n\
	 gg:z 2.76.\n\
gg:749 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.6;\n\
	 gg:table 53;\n\
	 gg:price 557;\n\
	 gg:x 4.43;\n\
	 gg:y 4.4;\n\
	 gg:z 2.81.\n\
gg:750 a gg:Diamond ;\n\
	 gg:carat 0.33;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.4;\n\
	 gg:table 59;\n\
	 gg:price 557;\n\
	 gg:x 4.54;\n\
	 gg:y 4.5;\n\
	 gg:z 2.73.\n\
gg:751 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 66.1;\n\
	 gg:table 56;\n\
	 gg:price 2856;\n\
	 gg:x 6.21;\n\
	 gg:y 5.97;\n\
	 gg:z 4.04.\n\
gg:752 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 59;\n\
	 gg:price 2856;\n\
	 gg:x 5.92;\n\
	 gg:y 5.86;\n\
	 gg:z 3.58.\n\
gg:753 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 58;\n\
	 gg:price 2856;\n\
	 gg:x 5.94;\n\
	 gg:y 5.9;\n\
	 gg:z 3.61.\n\
gg:754 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.1;\n\
	 gg:table 63;\n\
	 gg:price 2857;\n\
	 gg:x 5.68;\n\
	 gg:y 5.71;\n\
	 gg:z 3.42.\n\
gg:755 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.1;\n\
	 gg:table 58;\n\
	 gg:price 2857;\n\
	 gg:x 6.08;\n\
	 gg:y 6.02;\n\
	 gg:z 3.82.\n\
gg:756 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 57;\n\
	 gg:price 2857;\n\
	 gg:x 5.76;\n\
	 gg:y 5.7;\n\
	 gg:z 3.57.\n\
gg:757 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 59;\n\
	 gg:price 2857;\n\
	 gg:x 6.2;\n\
	 gg:y 6.14;\n\
	 gg:z 3.82.\n\
gg:758 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 58;\n\
	 gg:price 2857;\n\
	 gg:x 5.76;\n\
	 gg:y 5.73;\n\
	 gg:z 3.57.\n\
gg:759 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 56;\n\
	 gg:price 2858;\n\
	 gg:x 5.63;\n\
	 gg:y 5.71;\n\
	 gg:z 3.52.\n\
gg:760 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 57;\n\
	 gg:price 2858;\n\
	 gg:x 6.02;\n\
	 gg:y 6.05;\n\
	 gg:z 3.7.\n\
gg:761 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 57;\n\
	 gg:price 2858;\n\
	 gg:x 6;\n\
	 gg:y 6.05;\n\
	 gg:z 3.72.\n\
gg:762 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61;\n\
	 gg:table 60;\n\
	 gg:price 2858;\n\
	 gg:x 5.76;\n\
	 gg:y 5.69;\n\
	 gg:z 3.49.\n\
gg:763 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 59;\n\
	 gg:price 2858;\n\
	 gg:x 5.73;\n\
	 gg:y 5.7;\n\
	 gg:z 3.51.\n\
gg:764 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 60;\n\
	 gg:price 2858;\n\
	 gg:x 5.76;\n\
	 gg:y 5.68;\n\
	 gg:z 3.52.\n\
gg:765 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 63.5;\n\
	 gg:table 59;\n\
	 gg:price 2858;\n\
	 gg:x 5.68;\n\
	 gg:y 5.59;\n\
	 gg:z 3.58.\n\
gg:766 a gg:Diamond ;\n\
	 gg:carat 0.92;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 58;\n\
	 gg:price 2858;\n\
	 gg:x 6.22;\n\
	 gg:y 6.18;\n\
	 gg:z 3.9.\n\
gg:767 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 54;\n\
	 gg:price 2858;\n\
	 gg:x 5.88;\n\
	 gg:y 5.83;\n\
	 gg:z 3.67.\n\
gg:768 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2858;\n\
	 gg:x 5.84;\n\
	 gg:y 5.8;\n\
	 gg:z 3.58.\n\
gg:769 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 60.4;\n\
	 gg:table 62;\n\
	 gg:price 2858;\n\
	 gg:x 5.74;\n\
	 gg:y 5.72;\n\
	 gg:z 3.46.\n\
gg:770 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 63.6;\n\
	 gg:table 62;\n\
	 gg:price 2858;\n\
	 gg:x 5.61;\n\
	 gg:y 5.58;\n\
	 gg:z 3.56.\n\
gg:771 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 64.5;\n\
	 gg:table 56;\n\
	 gg:price 2858;\n\
	 gg:x 6.06;\n\
	 gg:y 6;\n\
	 gg:z 3.89.\n\
gg:772 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 56.9;\n\
	 gg:table 65;\n\
	 gg:price 2858;\n\
	 gg:x 5.89;\n\
	 gg:y 5.84;\n\
	 gg:z 3.34.\n\
gg:773 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61;\n\
	 gg:table 57;\n\
	 gg:price 2859;\n\
	 gg:x 5.76;\n\
	 gg:y 5.74;\n\
	 gg:z 3.51.\n\
gg:774 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 56;\n\
	 gg:price 2859;\n\
	 gg:x 5.72;\n\
	 gg:y 5.66;\n\
	 gg:z 3.55.\n\
gg:775 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 60;\n\
	 gg:price 2859;\n\
	 gg:x 5.91;\n\
	 gg:y 5.88;\n\
	 gg:z 3.59.\n\
gg:776 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2859;\n\
	 gg:x 5.74;\n\
	 gg:y 5.78;\n\
	 gg:z 3.54.\n\
gg:777 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.6;\n\
	 gg:table 61;\n\
	 gg:price 2859;\n\
	 gg:x 5.8;\n\
	 gg:y 5.77;\n\
	 gg:z 3.45.\n\
gg:778 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 55.8;\n\
	 gg:table 70;\n\
	 gg:price 2859;\n\
	 gg:x 6.09;\n\
	 gg:y 5.98;\n\
	 gg:z 3.37.\n\
gg:779 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.2;\n\
	 gg:table 60;\n\
	 gg:price 2859;\n\
	 gg:x 6.17;\n\
	 gg:y 6.12;\n\
	 gg:z 3.64.\n\
gg:780 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 61;\n\
	 gg:price 2860;\n\
	 gg:x 5.68;\n\
	 gg:y 5.73;\n\
	 gg:z 3.5.\n\
gg:781 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 63.6;\n\
	 gg:table 58;\n\
	 gg:price 2860;\n\
	 gg:x 6.07;\n\
	 gg:y 6.1;\n\
	 gg:z 3.87.\n\
gg:782 a gg:Diamond ;\n\
	 gg:carat 0.6;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.9;\n\
	 gg:table 54.9;\n\
	 gg:price 2860;\n\
	 gg:x 5.41;\n\
	 gg:y 5.44;\n\
	 gg:z 3.35.\n\
gg:783 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 57;\n\
	 gg:price 2860;\n\
	 gg:x 5.66;\n\
	 gg:y 5.6;\n\
	 gg:z 3.54.\n\
gg:784 a gg:Diamond ;\n\
	 gg:carat 0.53;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 57;\n\
	 gg:price 2860;\n\
	 gg:x 5.23;\n\
	 gg:y 5.2;\n\
	 gg:z 3.2.\n\
gg:785 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 58;\n\
	 gg:price 2861;\n\
	 gg:x 5.95;\n\
	 gg:y 5.78;\n\
	 gg:z 3.56.\n\
gg:786 a gg:Diamond ;\n\
	 gg:carat 0.62;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2861;\n\
	 gg:x 5.45;\n\
	 gg:y 5.48;\n\
	 gg:z 3.37.\n\
gg:787 a gg:Diamond ;\n\
	 gg:carat 0.62;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 2861;\n\
	 gg:x 5.48;\n\
	 gg:y 5.51;\n\
	 gg:z 3.38.\n\
gg:788 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63;\n\
	 gg:table 58;\n\
	 gg:price 2861;\n\
	 gg:x 6.09;\n\
	 gg:y 6.01;\n\
	 gg:z 3.81.\n\
gg:789 a gg:Diamond ;\n\
	 gg:carat 0.62;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 60.1;\n\
	 gg:table 61;\n\
	 gg:price 2861;\n\
	 gg:x 5.53;\n\
	 gg:y 5.56;\n\
	 gg:z 3.33.\n\
gg:790 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 59;\n\
	 gg:price 2861;\n\
	 gg:x 6.01;\n\
	 gg:y 5.98;\n\
	 gg:z 3.7.\n\
gg:791 a gg:Diamond ;\n\
	 gg:carat 0.66;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61;\n\
	 gg:table 58;\n\
	 gg:price 2861;\n\
	 gg:x 5.67;\n\
	 gg:y 5.57;\n\
	 gg:z 3.43.\n\
gg:792 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 55;\n\
	 gg:price 2862;\n\
	 gg:x 5.67;\n\
	 gg:y 5.72;\n\
	 gg:z 3.56.\n\
gg:793 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 2862;\n\
	 gg:x 5.9;\n\
	 gg:y 5.92;\n\
	 gg:z 3.7.\n\
gg:794 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 59;\n\
	 gg:price 2862;\n\
	 gg:x 5.88;\n\
	 gg:y 5.92;\n\
	 gg:z 3.69.\n\
gg:795 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 54;\n\
	 gg:price 2862;\n\
	 gg:x 5.97;\n\
	 gg:y 5.91;\n\
	 gg:z 3.7.\n\
gg:796 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 60;\n\
	 gg:price 2862;\n\
	 gg:x 5.65;\n\
	 gg:y 5.61;\n\
	 gg:z 3.56.\n\
gg:797 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.1;\n\
	 gg:table 57;\n\
	 gg:price 2862;\n\
	 gg:x 5.71;\n\
	 gg:y 5.74;\n\
	 gg:z 3.5.\n\
gg:798 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58.7;\n\
	 gg:table 63;\n\
	 gg:price 2862;\n\
	 gg:x 5.73;\n\
	 gg:y 5.69;\n\
	 gg:z 3.35.\n\
gg:799 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60;\n\
	 gg:table 60;\n\
	 gg:price 2862;\n\
	 gg:x 6.07;\n\
	 gg:y 5.99;\n\
	 gg:z 3.64.\n\
gg:800 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.5;\n\
	 gg:table 59;\n\
	 gg:price 2862;\n\
	 gg:x 5.82;\n\
	 gg:y 5.77;\n\
	 gg:z 3.45.\n\
gg:801 a gg:Diamond ;\n\
	 gg:carat 1.22;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 2862;\n\
	 gg:x 6.93;\n\
	 gg:y 6.88;\n\
	 gg:z 4.21.\n\
gg:802 a gg:Diamond ;\n\
	 gg:carat 1.01;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 67.6;\n\
	 gg:table 57;\n\
	 gg:price 2862;\n\
	 gg:x 6.21;\n\
	 gg:y 6.11;\n\
	 gg:z 4.18.\n\
gg:803 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 61;\n\
	 gg:price 2862;\n\
	 gg:x 5.78;\n\
	 gg:y 5.64;\n\
	 gg:z 3.59.\n\
gg:804 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 64.3;\n\
	 gg:table 58;\n\
	 gg:price 2863;\n\
	 gg:x 6.05;\n\
	 gg:y 6.09;\n\
	 gg:z 3.9.\n\
gg:805 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 56;\n\
	 gg:price 2863;\n\
	 gg:x 5.8;\n\
	 gg:y 5.77;\n\
	 gg:z 3.52.\n\
gg:806 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2863;\n\
	 gg:x 6.01;\n\
	 gg:y 5.97;\n\
	 gg:z 3.73.\n\
gg:807 a gg:Diamond ;\n\
	 gg:carat 0.84;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 59;\n\
	 gg:price 2863;\n\
	 gg:x 6.06;\n\
	 gg:y 6.01;\n\
	 gg:z 3.76.\n\
gg:808 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 61;\n\
	 gg:price 2863;\n\
	 gg:x 5.82;\n\
	 gg:y 5.75;\n\
	 gg:z 3.53.\n\
gg:809 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.7;\n\
	 gg:table 59;\n\
	 gg:price 2863;\n\
	 gg:x 5.82;\n\
	 gg:y 5.8;\n\
	 gg:z 3.47.\n\
gg:810 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 56;\n\
	 gg:price 2863;\n\
	 gg:x 5.8;\n\
	 gg:y 5.68;\n\
	 gg:z 3.54.\n\
gg:811 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 57;\n\
	 gg:price 2863;\n\
	 gg:x 5.75;\n\
	 gg:y 5.7;\n\
	 gg:z 3.53.\n\
gg:812 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 58;\n\
	 gg:price 2863;\n\
	 gg:x 5.79;\n\
	 gg:y 5.75;\n\
	 gg:z 3.54.\n\
gg:813 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.6;\n\
	 gg:table 58;\n\
	 gg:price 2863;\n\
	 gg:x 5.79;\n\
	 gg:y 5.77;\n\
	 gg:z 3.5.\n\
gg:814 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.5;\n\
	 gg:table 62;\n\
	 gg:price 2863;\n\
	 gg:x 6.4;\n\
	 gg:y 6.18;\n\
	 gg:z 3.74.\n\
gg:815 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.8;\n\
	 gg:table 62;\n\
	 gg:price 2863;\n\
	 gg:x 6.24;\n\
	 gg:y 6.21;\n\
	 gg:z 3.72.\n\
gg:816 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.5;\n\
	 gg:table 62;\n\
	 gg:price 2863;\n\
	 gg:x 5.74;\n\
	 gg:y 5.68;\n\
	 gg:z 3.51.\n\
gg:817 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 59.1;\n\
	 gg:table 61;\n\
	 gg:price 2863;\n\
	 gg:x 5.84;\n\
	 gg:y 5.8;\n\
	 gg:z 3.44.\n\
gg:818 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.5;\n\
	 gg:table 57;\n\
	 gg:price 2863;\n\
	 gg:x 5.91;\n\
	 gg:y 5.86;\n\
	 gg:z 3.5.\n\
gg:819 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 60;\n\
	 gg:price 2863;\n\
	 gg:x 5.78;\n\
	 gg:y 5.74;\n\
	 gg:z 3.51.\n\
gg:820 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61;\n\
	 gg:table 55;\n\
	 gg:price 2863;\n\
	 gg:x 5.79;\n\
	 gg:y 5.75;\n\
	 gg:z 3.52.\n\
gg:821 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.3;\n\
	 gg:table 57;\n\
	 gg:price 2864;\n\
	 gg:x 6.07;\n\
	 gg:y 6.04;\n\
	 gg:z 3.65.\n\
gg:822 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.6;\n\
	 gg:table 58;\n\
	 gg:price 2865;\n\
	 gg:x 6.05;\n\
	 gg:y 6.07;\n\
	 gg:z 3.73.\n\
gg:823 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 55;\n\
	 gg:price 2865;\n\
	 gg:x 5.87;\n\
	 gg:y 5.81;\n\
	 gg:z 3.55.\n\
gg:824 a gg:Diamond ;\n\
	 gg:carat 0.56;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62;\n\
	 gg:table 56;\n\
	 gg:price 2866;\n\
	 gg:x 5.25;\n\
	 gg:y 5.3;\n\
	 gg:z 3.27.\n\
gg:825 a gg:Diamond ;\n\
	 gg:carat 0.56;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 55;\n\
	 gg:price 2866;\n\
	 gg:x 5.27;\n\
	 gg:y 5.31;\n\
	 gg:z 3.27.\n\
gg:826 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.2;\n\
	 gg:table 55;\n\
	 gg:price 2866;\n\
	 gg:x 5.74;\n\
	 gg:y 5.7;\n\
	 gg:z 3.56.\n\
gg:827 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2866;\n\
	 gg:x 5.66;\n\
	 gg:y 5.7;\n\
	 gg:z 3.54.\n\
gg:828 a gg:Diamond ;\n\
	 gg:carat 0.96;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 58;\n\
	 gg:price 2866;\n\
	 gg:x 6.39;\n\
	 gg:y 6.3;\n\
	 gg:z 3.89.\n\
gg:829 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 62.9;\n\
	 gg:table 57;\n\
	 gg:price 2867;\n\
	 gg:x 5.67;\n\
	 gg:y 5.69;\n\
	 gg:z 3.57.\n\
gg:830 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.4;\n\
	 gg:table 57;\n\
	 gg:price 2867;\n\
	 gg:x 5.68;\n\
	 gg:y 5.61;\n\
	 gg:z 3.52.\n\
gg:831 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 60.4;\n\
	 gg:table 57;\n\
	 gg:price 2867;\n\
	 gg:x 5.78;\n\
	 gg:y 5.81;\n\
	 gg:z 3.5.\n\
gg:832 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.2;\n\
	 gg:table 53;\n\
	 gg:price 2867;\n\
	 gg:x 6.05;\n\
	 gg:y 5.98;\n\
	 gg:z 3.68.\n\
gg:833 a gg:Diamond ;\n\
	 gg:carat 0.95;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 58.4;\n\
	 gg:table 57;\n\
	 gg:price 2867;\n\
	 gg:x 6.49;\n\
	 gg:y 6.41;\n\
	 gg:z 3.77.\n\
gg:834 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 56;\n\
	 gg:price 2867;\n\
	 gg:x 5.99;\n\
	 gg:y 5.95;\n\
	 gg:z 3.72.\n\
gg:835 a gg:Diamond ;\n\
	 gg:carat 0.52;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS1\";\n\
	 gg:depth 61.2;\n\
	 gg:table 56;\n\
	 gg:price 2867;\n\
	 gg:x 5.21;\n\
	 gg:y 5.19;\n\
	 gg:z 3.18.\n\
gg:836 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 53;\n\
	 gg:price 2867;\n\
	 gg:x 6.12;\n\
	 gg:y 6;\n\
	 gg:z 3.74.\n\
gg:837 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.3;\n\
	 gg:table 56;\n\
	 gg:price 2867;\n\
	 gg:x 6.02;\n\
	 gg:y 5.96;\n\
	 gg:z 3.73.\n\
gg:838 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59.7;\n\
	 gg:table 57;\n\
	 gg:price 2867;\n\
	 gg:x 6.14;\n\
	 gg:y 6.12;\n\
	 gg:z 3.66.\n\
gg:839 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 57;\n\
	 gg:price 2867;\n\
	 gg:x 5.96;\n\
	 gg:y 5.91;\n\
	 gg:z 3.64.\n\
gg:840 a gg:Diamond ;\n\
	 gg:carat 0.96;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 68.2;\n\
	 gg:table 61;\n\
	 gg:price 2867;\n\
	 gg:x 6.07;\n\
	 gg:y 5.88;\n\
	 gg:z 4.1.\n\
gg:841 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 55;\n\
	 gg:price 2868;\n\
	 gg:x 5.72;\n\
	 gg:y 5.75;\n\
	 gg:z 3.58.\n\
gg:842 a gg:Diamond ;\n\
	 gg:carat 0.62;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 60.5;\n\
	 gg:table 57;\n\
	 gg:price 2868;\n\
	 gg:x 5.52;\n\
	 gg:y 5.56;\n\
	 gg:z 3.35.\n\
gg:843 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61;\n\
	 gg:table 58;\n\
	 gg:price 2868;\n\
	 gg:x 5.96;\n\
	 gg:y 5.9;\n\
	 gg:z 3.62.\n\
gg:844 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 56;\n\
	 gg:price 2868;\n\
	 gg:x 5.78;\n\
	 gg:y 5.7;\n\
	 gg:z 3.62.\n\
gg:845 a gg:Diamond ;\n\
	 gg:carat 1.08;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 61.9;\n\
	 gg:table 60;\n\
	 gg:price 2869;\n\
	 gg:x 6.55;\n\
	 gg:y 6.48;\n\
	 gg:z 4.03.\n\
gg:846 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 55;\n\
	 gg:price 2869;\n\
	 gg:x 5.77;\n\
	 gg:y 5.84;\n\
	 gg:z 3.53.\n\
gg:847 a gg:Diamond ;\n\
	 gg:carat 0.62;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2869;\n\
	 gg:x 5.43;\n\
	 gg:y 5.47;\n\
	 gg:z 3.37.\n\
gg:848 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.3;\n\
	 gg:table 57;\n\
	 gg:price 2869;\n\
	 gg:x 5.84;\n\
	 gg:y 5.81;\n\
	 gg:z 3.57.\n\
gg:849 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 60.9;\n\
	 gg:table 57;\n\
	 gg:price 2869;\n\
	 gg:x 5.79;\n\
	 gg:y 5.77;\n\
	 gg:z 3.52.\n\
gg:850 a gg:Diamond ;\n\
	 gg:carat 0.52;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 60;\n\
	 gg:price 2870;\n\
	 gg:x 5.16;\n\
	 gg:y 5.13;\n\
	 gg:z 3.18.\n\
gg:851 a gg:Diamond ;\n\
	 gg:carat 0.83;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.2;\n\
	 gg:table 57;\n\
	 gg:price 2870;\n\
	 gg:x 6;\n\
	 gg:y 6.05;\n\
	 gg:z 3.75.\n\
gg:852 a gg:Diamond ;\n\
	 gg:carat 0.64;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.1;\n\
	 gg:table 58;\n\
	 gg:price 2870;\n\
	 gg:x 5.56;\n\
	 gg:y 5.51;\n\
	 gg:z 3.44.\n\
gg:853 a gg:Diamond ;\n\
	 gg:carat 0.8;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 2870;\n\
	 gg:x 5.94;\n\
	 gg:y 5.9;\n\
	 gg:z 3.7.\n\
gg:854 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.1;\n\
	 gg:table 56;\n\
	 gg:price 2870;\n\
	 gg:x 5.77;\n\
	 gg:y 5.83;\n\
	 gg:z 3.6.\n\
gg:855 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 56;\n\
	 gg:price 2870;\n\
	 gg:x 5.72;\n\
	 gg:y 5.79;\n\
	 gg:z 3.54.\n\
gg:856 a gg:Diamond ;\n\
	 gg:carat 0.82;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 59.5;\n\
	 gg:table 57;\n\
	 gg:price 2870;\n\
	 gg:x 6.12;\n\
	 gg:y 6.09;\n\
	 gg:z 3.63.\n\
gg:857 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 59;\n\
	 gg:price 2870;\n\
	 gg:x 5.81;\n\
	 gg:y 5.78;\n\
	 gg:z 3.55.\n\
gg:858 a gg:Diamond ;\n\
	 gg:carat 1.04;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 61;\n\
	 gg:price 2870;\n\
	 gg:x 6.47;\n\
	 gg:y 6.45;\n\
	 gg:z 3.98.\n\
gg:859 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.3;\n\
	 gg:table 58;\n\
	 gg:price 2871;\n\
	 gg:x 5.76;\n\
	 gg:y 5.83;\n\
	 gg:z 3.55.\n\
gg:860 a gg:Diamond ;\n\
	 gg:carat 0.73;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.6;\n\
	 gg:table 57;\n\
	 gg:price 2871;\n\
	 gg:x 5.7;\n\
	 gg:y 5.72;\n\
	 gg:z 3.63.\n\
gg:861 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 59;\n\
	 gg:price 2871;\n\
	 gg:x 6.13;\n\
	 gg:y 6.03;\n\
	 gg:z 3.82.\n\
gg:862 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 55;\n\
	 gg:price 2871;\n\
	 gg:x 5.83;\n\
	 gg:y 5.85;\n\
	 gg:z 3.61.\n\
gg:863 a gg:Diamond ;\n\
	 gg:carat 0.79;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 55;\n\
	 gg:price 2871;\n\
	 gg:x 5.91;\n\
	 gg:y 5.95;\n\
	 gg:z 3.71.\n\
gg:864 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 56.7;\n\
	 gg:price 2872;\n\
	 gg:x 5.59;\n\
	 gg:y 5.62;\n\
	 gg:z 3.51.\n\
gg:865 a gg:Diamond ;\n\
	 gg:carat 0.75;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 55;\n\
	 gg:price 2872;\n\
	 gg:x 5.87;\n\
	 gg:y 5.92;\n\
	 gg:z 3.58.\n\
gg:866 a gg:Diamond ;\n\
	 gg:carat 1.02;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"I1\";\n\
	 gg:depth 61.7;\n\
	 gg:table 56;\n\
	 gg:price 2872;\n\
	 gg:x 6.44;\n\
	 gg:y 6.49;\n\
	 gg:z 3.99.\n\
gg:867 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 59;\n\
	 gg:table 62;\n\
	 gg:price 2872;\n\
	 gg:x 5.79;\n\
	 gg:y 5.81;\n\
	 gg:z 3.42.\n\
gg:868 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 56;\n\
	 gg:price 2872;\n\
	 gg:x 5.63;\n\
	 gg:y 5.73;\n\
	 gg:z 3.51.\n\
gg:869 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 64;\n\
	 gg:price 2872;\n\
	 gg:x 5.66;\n\
	 gg:y 5.71;\n\
	 gg:z 3.49.\n\
gg:870 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 54;\n\
	 gg:price 2872;\n\
	 gg:x 5.71;\n\
	 gg:y 5.75;\n\
	 gg:z 3.52.\n\
gg:871 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.7;\n\
	 gg:table 56;\n\
	 gg:price 2872;\n\
	 gg:x 5.72;\n\
	 gg:y 5.75;\n\
	 gg:z 3.48.\n\
gg:872 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.2;\n\
	 gg:table 60;\n\
	 gg:price 2872;\n\
	 gg:x 5.75;\n\
	 gg:y 5.82;\n\
	 gg:z 3.48.\n\
gg:873 a gg:Diamond ;\n\
	 gg:carat 0.72;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 58.3;\n\
	 gg:table 57;\n\
	 gg:price 2872;\n\
	 gg:x 5.89;\n\
	 gg:y 5.94;\n\
	 gg:z 3.45.\n\
gg:874 a gg:Diamond ;\n\
	 gg:carat 0.74;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.3;\n\
	 gg:table 58;\n\
	 gg:price 2872;\n\
	 gg:x 5.74;\n\
	 gg:y 5.78;\n\
	 gg:z 3.59.\n\
gg:875 a gg:Diamond ;\n\
	 gg:carat 0.84;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 65.1;\n\
	 gg:table 55;\n\
	 gg:price 2872;\n\
	 gg:x 5.88;\n\
	 gg:y 5.97;\n\
	 gg:z 3.86.\n\
gg:876 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62;\n\
	 gg:table 58;\n\
	 gg:price 2873;\n\
	 gg:x 5.8;\n\
	 gg:y 5.86;\n\
	 gg:z 3.62.\n\
gg:877 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.2;\n\
	 gg:table 58;\n\
	 gg:price 2873;\n\
	 gg:x 5.8;\n\
	 gg:y 5.84;\n\
	 gg:z 3.68.\n\
gg:878 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62.8;\n\
	 gg:table 56;\n\
	 gg:price 2873;\n\
	 gg:x 5.78;\n\
	 gg:y 5.82;\n\
	 gg:z 3.64.\n\
gg:879 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.7;\n\
	 gg:table 56;\n\
	 gg:price 2873;\n\
	 gg:x 6.45;\n\
	 gg:y 6.41;\n\
	 gg:z 3.97.\n\
gg:880 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 65.5;\n\
	 gg:table 62;\n\
	 gg:price 2873;\n\
	 gg:x 6.14;\n\
	 gg:y 6.07;\n\
	 gg:z 4.\n\
gg:881 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 65.7;\n\
	 gg:table 58;\n\
	 gg:price 2873;\n\
	 gg:x 6.03;\n\
	 gg:y 6;\n\
	 gg:z 3.95.\n\
gg:882 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.8;\n\
	 gg:table 58;\n\
	 gg:price 2873;\n\
	 gg:x 6.16;\n\
	 gg:y 6.13;\n\
	 gg:z 3.8.\n\
gg:883 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 64;\n\
	 gg:table 61;\n\
	 gg:price 2873;\n\
	 gg:x 6;\n\
	 gg:y 5.96;\n\
	 gg:z 3.83.\n\
gg:884 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 65.3;\n\
	 gg:table 61;\n\
	 gg:price 2873;\n\
	 gg:x 5.98;\n\
	 gg:y 5.94;\n\
	 gg:z 3.89.\n\
gg:885 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 65.8;\n\
	 gg:table 56;\n\
	 gg:price 2873;\n\
	 gg:x 6.01;\n\
	 gg:y 5.96;\n\
	 gg:z 3.94.\n\
gg:886 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 60.9;\n\
	 gg:table 61;\n\
	 gg:price 2873;\n\
	 gg:x 6.26;\n\
	 gg:y 6.22;\n\
	 gg:z 3.8.\n\
gg:887 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 2874;\n\
	 gg:x 5.91;\n\
	 gg:y 5.82;\n\
	 gg:z 3.67.\n\
gg:888 a gg:Diamond ;\n\
	 gg:carat 0.71;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.2;\n\
	 gg:table 59;\n\
	 gg:price 2874;\n\
	 gg:x 5.69;\n\
	 gg:y 5.74;\n\
	 gg:z 3.5.\n\
gg:889 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 59;\n\
	 gg:table 59;\n\
	 gg:price 2874;\n\
	 gg:x 5.79;\n\
	 gg:y 5.77;\n\
	 gg:z 3.41.\n\
gg:890 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 60.8;\n\
	 gg:table 62;\n\
	 gg:price 2874;\n\
	 gg:x 5.71;\n\
	 gg:y 5.67;\n\
	 gg:z 3.46.\n\
gg:891 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 61.8;\n\
	 gg:table 58;\n\
	 gg:price 2874;\n\
	 gg:x 5.67;\n\
	 gg:y 5.63;\n\
	 gg:z 3.49.\n\
gg:892 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61;\n\
	 gg:table 55;\n\
	 gg:price 2874;\n\
	 gg:x 5.77;\n\
	 gg:y 5.73;\n\
	 gg:z 3.51.\n\
gg:893 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 55;\n\
	 gg:price 2874;\n\
	 gg:x 5.75;\n\
	 gg:y 5.71;\n\
	 gg:z 3.53.\n\
gg:894 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 56;\n\
	 gg:price 2874;\n\
	 gg:x 5.69;\n\
	 gg:y 5.65;\n\
	 gg:z 3.54.\n\
gg:895 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.9;\n\
	 gg:table 59;\n\
	 gg:price 2874;\n\
	 gg:x 5.68;\n\
	 gg:y 5.61;\n\
	 gg:z 3.55.\n\
gg:896 a gg:Diamond ;\n\
	 gg:carat 1;\n\
	 gg:cut \"Fair\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 67.7;\n\
	 gg:table 60;\n\
	 gg:price 2875;\n\
	 gg:x 6.11;\n\
	 gg:y 5.98;\n\
	 gg:z 4.09.\n\
gg:897 a gg:Diamond ;\n\
	 gg:carat 0.77;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.4;\n\
	 gg:table 56;\n\
	 gg:price 2875;\n\
	 gg:x 5.84;\n\
	 gg:y 5.9;\n\
	 gg:z 3.66.\n\
gg:3671 a gg:Diamond ;\n\
	 gg:carat 1.02;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 58.9;\n\
	 gg:table 62;\n\
	 gg:price 3444;\n\
	 gg:x 6.51;\n\
	 gg:y 6.43;\n\
	 gg:z 3.81.\n\
gg:3672 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.5;\n\
	 gg:table 57;\n\
	 gg:price 3444;\n\
	 gg:x 5.94;\n\
	 gg:y 5.9;\n\
	 gg:z 3.7.\n\
gg:3673 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS2\";\n\
	 gg:depth 61.4;\n\
	 gg:table 58;\n\
	 gg:price 3445;\n\
	 gg:x 6.16;\n\
	 gg:y 6.26;\n\
	 gg:z 3.81.\n\
gg:3674 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 62;\n\
	 gg:table 59;\n\
	 gg:price 3445;\n\
	 gg:x 6.14;\n\
	 gg:y 6.19;\n\
	 gg:z 3.82.\n\
gg:3675 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 60.4;\n\
	 gg:table 58;\n\
	 gg:price 3445;\n\
	 gg:x 6.25;\n\
	 gg:y 6.3;\n\
	 gg:z 3.79.\n\
gg:3676 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI2\";\n\
	 gg:depth 61.1;\n\
	 gg:table 55;\n\
	 gg:price 3445;\n\
	 gg:x 6.21;\n\
	 gg:y 6.26;\n\
	 gg:z 3.81.\n\
gg:3677 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"J\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.7;\n\
	 gg:table 56;\n\
	 gg:price 3445;\n\
	 gg:x 6.21;\n\
	 gg:y 6.16;\n\
	 gg:z 3.88.\n\
gg:3678 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VVS2\";\n\
	 gg:depth 62.5;\n\
	 gg:table 58;\n\
	 gg:price 3445;\n\
	 gg:x 5.68;\n\
	 gg:y 5.75;\n\
	 gg:z 3.57.\n\
gg:3679 a gg:Diamond ;\n\
	 gg:carat 0.91;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"G\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 63.1;\n\
	 gg:table 63;\n\
	 gg:price 3445;\n\
	 gg:x 6.16;\n\
	 gg:y 6.11;\n\
	 gg:z 3.87.\n\
gg:3680 a gg:Diamond ;\n\
	 gg:carat 0.78;\n\
	 gg:cut \"Premium\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.5;\n\
	 gg:table 58;\n\
	 gg:price 3446;\n\
	 gg:x 5.93;\n\
	 gg:y 5.98;\n\
	 gg:z 3.66.\n\
gg:3681 a gg:Diamond ;\n\
	 gg:carat 0.51;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 62;\n\
	 gg:table 56;\n\
	 gg:price 3446;\n\
	 gg:x 5.14;\n\
	 gg:y 5.18;\n\
	 gg:z 3.2.\n\
gg:3682 a gg:Diamond ;\n\
	 gg:carat 0.76;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"F\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61.6;\n\
	 gg:table 56;\n\
	 gg:price 3446;\n\
	 gg:x 5.87;\n\
	 gg:y 5.91;\n\
	 gg:z 3.63.\n\
gg:3683 a gg:Diamond ;\n\
	 gg:carat 0.51;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"D\";\n\
	 gg:cut \"IF\";\n\
	 gg:depth 62.1;\n\
	 gg:table 55;\n\
	 gg:price 3446;\n\
	 gg:x 5.12;\n\
	 gg:y 5.13;\n\
	 gg:z 3.19.\n\
gg:3684 a gg:Diamond ;\n\
	 gg:carat 0.7;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"E\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 61;\n\
	 gg:table 56;\n\
	 gg:price 3446;\n\
	 gg:x 5.7;\n\
	 gg:y 5.77;\n\
	 gg:z 3.5.\n\
gg:3685 a gg:Diamond ;\n\
	 gg:carat 0.81;\n\
	 gg:cut \"Ideal\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61.4;\n\
	 gg:table 56;\n\
	 gg:price 3446;\n\
	 gg:x 6;\n\
	 gg:y 6.05;\n\
	 gg:z 3.7.\n\
gg:3686 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 3447;\n\
	 gg:x 6.08;\n\
	 gg:y 6.12;\n\
	 gg:z 3.82.\n\
gg:3687 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.6;\n\
	 gg:table 58;\n\
	 gg:price 3447;\n\
	 gg:x 6.14;\n\
	 gg:y 6.17;\n\
	 gg:z 3.85.\n\
gg:3688 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"I\";\n\
	 gg:cut \"VS1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 59;\n\
	 gg:price 3447;\n\
	 gg:x 6.11;\n\
	 gg:y 6.18;\n\
	 gg:z 3.86.\n\
gg:3689 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 62.8;\n\
	 gg:table 62;\n\
	 gg:price 3447;\n\
	 gg:x 6.05;\n\
	 gg:y 6.09;\n\
	 gg:z 3.81.\n\
gg:3690 a gg:Diamond ;\n\
	 gg:carat 0.9;\n\
	 gg:cut \"Very Good\";\n\
	 gg:color \"H\";\n\
	 gg:cut \"SI1\";\n\
	 gg:depth 61;\n\
	 gg:table 59;\n\
	 gg:price 3447;\n\
	 gg:x 6.11;\n\
	 gg:y 6.16;\n\
         gg:z 3.74.",
	

	source: "new LinkedVis({width: 500, height: 300}).from(graph)\n\
\n\
		.struct(LinkedVis.List(\"{ ?node a gg:Diamond }\"))\n\
\n\
		.stackLayer(function(l) {\n\
\n\
		    l.bind({shape:          'circle', \n\
\n\
			    x:              {rdfProperty: 'gg:x',\n\
				             scale: 'continous'},\n\
\n\
			    y:              {rdfProperty: 'gg:y',\n\
				             scale: 'continous'},\n\
\n\
			    radius:         {rdfProperty: 'gg:carat',\n\
				             scale: 'continous',\n\
				             rangeMin: 1,\n\
				             rangeMax: 10},\n\
\n\
			    fill:           {rdfProperty: 'gg:cut',\n\
				             scale: 'hue'},\n\
\n\
			    stroke:         'black',\n\
\n\
			    'stroke-width': 1})\n\
\n\
		     .layout(LinkedVis.Cartesian())\n\
                     .theme({title:'ggplot diamonds', axis:{y:'gg:y', x:'gg:x'}})\n\
		})\n\
\n\
  		.render(\"#canvas\");"
    }
}
