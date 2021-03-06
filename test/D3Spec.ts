/**
 * Created by nico on 2017-03-11.
 */
/**
 * Created by nicoa on 2017-01-31.
 */

/**
 * Created by rtholmes on 2016-10-31.
 */

import Server from "../src/rest/Server";
import {expect} from 'chai';
import Log from "../src/Util";
import {InsightResponse, QueryRequest} from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";
var fs = require("fs");
var zip: any = fs.readFileSync("courses.zip", "base64");
var zip3 = fs.readFileSync("rooms.zip", "base64");

let responseAddress = '{"render":"TABLE","result":[{"rooms_fullname":"Hugh Dempster Pavilion","rooms_name":"DMP_101"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_name":"DMP_110"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_name":"DMP_201"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_name":"DMP_301"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_name":"DMP_310"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_1001"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3002"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3004"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3016"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3018"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3052"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3058"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3062"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3068"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3072"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_3074"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4002"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4004"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4016"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4018"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4052"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4058"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4062"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4068"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4072"},{"rooms_fullname":"Orchard Commons","rooms_name":"ORCH_4074"}]}';
let responsetriple = '{"render":"TABLE","result":[{"rooms_fullname":"Hugh Dempster Pavilion","rooms_type":"Small Group","rooms_name":"DMP_101"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_type":"Small Group","rooms_name":"DMP_201"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_type":"Tiered Large Group","rooms_name":"DMP_110"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_type":"Tiered Large Group","rooms_name":"DMP_301"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_type":"Tiered Large Group","rooms_name":"DMP_310"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_1001"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_3016"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_4002"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_4004"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_4016"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_4018"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_4062"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_4068"},{"rooms_fullname":"Orchard Commons","rooms_type":"Active Learning","rooms_name":"ORCH_4072"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3002"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3004"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3052"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3058"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3062"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3068"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3072"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_3074"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_4052"},{"rooms_fullname":"Orchard Commons","rooms_type":"Open Design General Purpose","rooms_name":"ORCH_4058"},{"rooms_fullname":"Orchard Commons","rooms_type":"Studio Lab","rooms_name":"ORCH_3018"},{"rooms_fullname":"Orchard Commons","rooms_type":"Studio Lab","rooms_name":"ORCH_4074"}]}';
let responseBasic = '{"render":"TABLE","result":[{"rooms_furniture":"Classroom-Fixed Tables/Fixed Chairs"},{"rooms_furniture":"Classroom-Fixed Tables/Movable Chairs"},{"rooms_furniture":"Classroom-Fixed Tables/Moveable Chairs"},{"rooms_furniture":"Classroom-Fixed Tablets"},{"rooms_furniture":"Classroom-Hybrid Furniture"},{"rooms_furniture":"Classroom-Learn Lab"},{"rooms_furniture":"Classroom-Movable Tables & Chairs"},{"rooms_furniture":"Classroom-Movable Tablets"},{"rooms_furniture":"Classroom-Moveable Tables & Chairs"},{"rooms_furniture":"Classroom-Moveable Tablets"}]}';
let responseMax = '{"render":"TABLE","result":[{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":442},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":350},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":375}]}';
let responseMin = '{"render":"TABLE","result":[{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group","transs":88},{"rooms_shortname":"WOOD","rooms_type":"Small Group","transs":10},{"rooms_shortname":"WESB","rooms_type":"Tiered Large Group","transs":102},{"rooms_shortname":"UCLL","rooms_type":"Studio Lab","transs":30},{"rooms_shortname":"UCLL","rooms_type":"Small Group","transs":30},{"rooms_shortname":"UCLL","rooms_type":"Open Design General Purpose","transs":48},{"rooms_shortname":"SWNG","rooms_type":"Tiered Large Group","transs":187},{"rooms_shortname":"SWNG","rooms_type":"Small Group","transs":27},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose","transs":47},{"rooms_shortname":"SRC","rooms_type":"TBD","transs":299},{"rooms_shortname":"SPPH","rooms_type":"Small Group","transs":12},{"rooms_shortname":"SPPH","rooms_type":"Open Design General Purpose","transs":66},{"rooms_shortname":"SOWK","rooms_type":"Small Group","transs":12},{"rooms_shortname":"SOWK","rooms_type":"Open Design General Purpose","transs":29},{"rooms_shortname":"SCRF","rooms_type":"Tiered Large Group","transs":280},{"rooms_shortname":"SCRF","rooms_type":"Small Group","transs":20},{"rooms_shortname":"PHRM","rooms_type":"Tiered Large Group","transs":167},{"rooms_shortname":"PHRM","rooms_type":"Small Group","transs":7},{"rooms_shortname":"PHRM","rooms_type":"Open Design General Purpose","transs":72},{"rooms_shortname":"PCOH","rooms_type":"Small Group","transs":24},{"rooms_shortname":"PCOH","rooms_type":"Open Design General Purpose","transs":40},{"rooms_shortname":"OSBO","rooms_type":"Small Group","transs":39},{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":442},{"rooms_shortname":"ORCH","rooms_type":"Studio Lab","transs":48},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose","transs":16},{"rooms_shortname":"ORCH","rooms_type":"Active Learning","transs":16},{"rooms_shortname":"MGYM","rooms_type":"Open Design General Purpose","transs":25},{"rooms_shortname":"MCML","rooms_type":"Tiered Large Group","transs":74},{"rooms_shortname":"MCML","rooms_type":"Small Group","transs":6},{"rooms_shortname":"MCML","rooms_type":"Open Design General Purpose","transs":47},{"rooms_shortname":"MCML","rooms_type":"Case Style","transs":72},{"rooms_shortname":"MCLD","rooms_type":"Tiered Large Group","transs":123},{"rooms_shortname":"MCLD","rooms_type":"Small Group","transs":40},{"rooms_shortname":"MCLD","rooms_type":"Open Design General Purpose","transs":60},{"rooms_shortname":"MATX","rooms_type":"Tiered Large Group","transs":106},{"rooms_shortname":"MATH","rooms_type":"Tiered Large Group","transs":224},{"rooms_shortname":"MATH","rooms_type":"Small Group","transs":25},{"rooms_shortname":"MATH","rooms_type":"Open Design General Purpose","transs":30},{"rooms_shortname":"LSK","rooms_type":"Tiered Large Group","transs":183},{"rooms_shortname":"LSK","rooms_type":"Open Design General Purpose","transs":42},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":125},{"rooms_shortname":"LASR","rooms_type":"Tiered Large Group","transs":80},{"rooms_shortname":"LASR","rooms_type":"Small Group","transs":20},{"rooms_shortname":"LASR","rooms_type":"Open Design General Purpose","transs":51},{"rooms_shortname":"LASR","rooms_type":"","transs":60},{"rooms_shortname":"IONA","rooms_type":"Open Design General Purpose","transs":50},{"rooms_shortname":"IONA","rooms_type":"Case Style","transs":100},{"rooms_shortname":"IBLC","rooms_type":"Tiered Large Group","transs":154},{"rooms_shortname":"IBLC","rooms_type":"Small Group","transs":8},{"rooms_shortname":"IBLC","rooms_type":"Open Design General Purpose","transs":112},{"rooms_shortname":"IBLC","rooms_type":"Case Style","transs":50},{"rooms_shortname":"HENN","rooms_type":"Tiered Large Group","transs":150},{"rooms_shortname":"HENN","rooms_type":"Small Group","transs":30},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":375},{"rooms_shortname":"HEBB","rooms_type":"Open Design General Purpose","transs":54},{"rooms_shortname":"GEOG","rooms_type":"Tiered Large Group","transs":225},{"rooms_shortname":"GEOG","rooms_type":"Small Group","transs":21},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose","transs":42},{"rooms_shortname":"FSC","rooms_type":"Tiered Large Group","transs":99},{"rooms_shortname":"FSC","rooms_type":"Small Group","transs":18},{"rooms_shortname":"FSC","rooms_type":"Case Style","transs":65},{"rooms_shortname":"FRDM","rooms_type":"Tiered Large Group","transs":160},{"rooms_shortname":"FORW","rooms_type":"Small Group","transs":35},{"rooms_shortname":"FORW","rooms_type":"Open Design General Purpose","transs":63},{"rooms_shortname":"FNH","rooms_type":"Tiered Large Group","transs":99},{"rooms_shortname":"FNH","rooms_type":"Small Group","transs":12},{"rooms_shortname":"FNH","rooms_type":"Open Design General Purpose","transs":43},{"rooms_shortname":"ESB","rooms_type":"Tiered Large Group","transs":80},{"rooms_shortname":"EOSM","rooms_type":"Open Design General Purpose","transs":50},{"rooms_shortname":"DMP","rooms_type":"Tiered Large Group","transs":80},{"rooms_shortname":"DMP","rooms_type":"Small Group","transs":40},{"rooms_shortname":"CIRS","rooms_type":"Tiered Large Group","transs":426},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group","transs":90},{"rooms_shortname":"CHBE","rooms_type":"Tiered Large Group","transs":94},{"rooms_shortname":"CHBE","rooms_type":"Open Design General Purpose","transs":60},{"rooms_shortname":"CEME","rooms_type":"Tiered Large Group","transs":100},{"rooms_shortname":"CEME","rooms_type":"Small Group","transs":22},{"rooms_shortname":"CEME","rooms_type":"Case Style","transs":34},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group","transs":65},{"rooms_shortname":"BUCH","rooms_type":"Small Group","transs":18},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose","transs":24},{"rooms_shortname":"BUCH","rooms_type":"Case Style","transs":56},{"rooms_shortname":"BRKX","rooms_type":"Tiered Large Group","transs":70},{"rooms_shortname":"BRKX","rooms_type":"Open Design General Purpose","transs":24},{"rooms_shortname":"BIOL","rooms_type":"Tiered Large Group","transs":76},{"rooms_shortname":"BIOL","rooms_type":"Small Group","transs":16},{"rooms_shortname":"AUDX","rooms_type":"Small Group","transs":20},{"rooms_shortname":"ANSO","rooms_type":"Small Group","transs":26},{"rooms_shortname":"ANSO","rooms_type":"Open Design General Purpose","transs":90},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group","transs":44},{"rooms_shortname":"ANGU","rooms_type":"TBD","transs":32},{"rooms_shortname":"ANGU","rooms_type":"Small Group","transs":16},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose","transs":16},{"rooms_shortname":"ANGU","rooms_type":"Case Style","transs":41},{"rooms_shortname":"ALRD","rooms_type":"Open Design General Purpose","transs":20},{"rooms_shortname":"ALRD","rooms_type":"Case Style","transs":50},{"rooms_shortname":"AERL","rooms_type":"Tiered Large Group","transs":144}]}';
let responseAvg = '{"render":"TABLE","result":[{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group","transs":188.67},{"rooms_shortname":"WOOD","rooms_type":"Small Group","transs":16.5},{"rooms_shortname":"WESB","rooms_type":"Tiered Large Group","transs":213.5},{"rooms_shortname":"UCLL","rooms_type":"Studio Lab","transs":30},{"rooms_shortname":"UCLL","rooms_type":"Small Group","transs":30},{"rooms_shortname":"UCLL","rooms_type":"Open Design General Purpose","transs":51.5},{"rooms_shortname":"SWNG","rooms_type":"Tiered Large Group","transs":188.75},{"rooms_shortname":"SWNG","rooms_type":"Small Group","transs":27},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose","transs":47},{"rooms_shortname":"SRC","rooms_type":"TBD","transs":299},{"rooms_shortname":"SPPH","rooms_type":"Small Group","transs":20},{"rooms_shortname":"SPPH","rooms_type":"Open Design General Purpose","transs":66},{"rooms_shortname":"SOWK","rooms_type":"Small Group","transs":14.67},{"rooms_shortname":"SOWK","rooms_type":"Open Design General Purpose","transs":39.25},{"rooms_shortname":"SCRF","rooms_type":"Tiered Large Group","transs":280},{"rooms_shortname":"SCRF","rooms_type":"Small Group","transs":34.48},{"rooms_shortname":"PHRM","rooms_type":"Tiered Large Group","transs":201.5},{"rooms_shortname":"PHRM","rooms_type":"Small Group","transs":7.88},{"rooms_shortname":"PHRM","rooms_type":"Open Design General Purpose","transs":72},{"rooms_shortname":"PCOH","rooms_type":"Small Group","transs":24},{"rooms_shortname":"PCOH","rooms_type":"Open Design General Purpose","transs":40},{"rooms_shortname":"OSBO","rooms_type":"Small Group","transs":39.5},{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":442},{"rooms_shortname":"ORCH","rooms_type":"Studio Lab","transs":60},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose","transs":27},{"rooms_shortname":"ORCH","rooms_type":"Active Learning","transs":30.22},{"rooms_shortname":"MGYM","rooms_type":"Open Design General Purpose","transs":32.5},{"rooms_shortname":"MCML","rooms_type":"Tiered Large Group","transs":137},{"rooms_shortname":"MCML","rooms_type":"Small Group","transs":12},{"rooms_shortname":"MCML","rooms_type":"Open Design General Purpose","transs":47},{"rooms_shortname":"MCML","rooms_type":"Case Style","transs":72},{"rooms_shortname":"MCLD","rooms_type":"Tiered Large Group","transs":129.5},{"rooms_shortname":"MCLD","rooms_type":"Small Group","transs":40},{"rooms_shortname":"MCLD","rooms_type":"Open Design General Purpose","transs":68},{"rooms_shortname":"MATX","rooms_type":"Tiered Large Group","transs":106},{"rooms_shortname":"MATH","rooms_type":"Tiered Large Group","transs":224},{"rooms_shortname":"MATH","rooms_type":"Small Group","transs":38.33},{"rooms_shortname":"MATH","rooms_type":"Open Design General Purpose","transs":39},{"rooms_shortname":"LSK","rooms_type":"Tiered Large Group","transs":194},{"rooms_shortname":"LSK","rooms_type":"Open Design General Purpose","transs":58.5},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":275},{"rooms_shortname":"LASR","rooms_type":"Tiered Large Group","transs":87},{"rooms_shortname":"LASR","rooms_type":"Small Group","transs":20},{"rooms_shortname":"LASR","rooms_type":"Open Design General Purpose","transs":51},{"rooms_shortname":"LASR","rooms_type":"","transs":60},{"rooms_shortname":"IONA","rooms_type":"Open Design General Purpose","transs":50},{"rooms_shortname":"IONA","rooms_type":"Case Style","transs":100},{"rooms_shortname":"IBLC","rooms_type":"Tiered Large Group","transs":154},{"rooms_shortname":"IBLC","rooms_type":"Small Group","transs":16.8},{"rooms_shortname":"IBLC","rooms_type":"Open Design General Purpose","transs":112},{"rooms_shortname":"IBLC","rooms_type":"Case Style","transs":50},{"rooms_shortname":"HENN","rooms_type":"Tiered Large Group","transs":187.33},{"rooms_shortname":"HENN","rooms_type":"Small Group","transs":32},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":375},{"rooms_shortname":"HEBB","rooms_type":"Open Design General Purpose","transs":54},{"rooms_shortname":"GEOG","rooms_type":"Tiered Large Group","transs":225},{"rooms_shortname":"GEOG","rooms_type":"Small Group","transs":30},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose","transs":66.8},{"rooms_shortname":"FSC","rooms_type":"Tiered Large Group","transs":174.5},{"rooms_shortname":"FSC","rooms_type":"Small Group","transs":23.67},{"rooms_shortname":"FSC","rooms_type":"Case Style","transs":65},{"rooms_shortname":"FRDM","rooms_type":"Tiered Large Group","transs":160},{"rooms_shortname":"FORW","rooms_type":"Small Group","transs":39.5},{"rooms_shortname":"FORW","rooms_type":"Open Design General Purpose","transs":63},{"rooms_shortname":"FNH","rooms_type":"Tiered Large Group","transs":99},{"rooms_shortname":"FNH","rooms_type":"Small Group","transs":22.33},{"rooms_shortname":"FNH","rooms_type":"Open Design General Purpose","transs":48.5},{"rooms_shortname":"ESB","rooms_type":"Tiered Large Group","transs":193.33},{"rooms_shortname":"EOSM","rooms_type":"Open Design General Purpose","transs":50},{"rooms_shortname":"DMP","rooms_type":"Tiered Large Group","transs":120},{"rooms_shortname":"DMP","rooms_type":"Small Group","transs":40},{"rooms_shortname":"CIRS","rooms_type":"Tiered Large Group","transs":426},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group","transs":152.17},{"rooms_shortname":"CHBE","rooms_type":"Tiered Large Group","transs":147},{"rooms_shortname":"CHBE","rooms_type":"Open Design General Purpose","transs":60},{"rooms_shortname":"CEME","rooms_type":"Tiered Large Group","transs":100},{"rooms_shortname":"CEME","rooms_type":"Small Group","transs":24},{"rooms_shortname":"CEME","rooms_type":"Case Style","transs":47},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group","transs":123.8},{"rooms_shortname":"BUCH","rooms_type":"Small Group","transs":27},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose","transs":40.56},{"rooms_shortname":"BUCH","rooms_type":"Case Style","transs":82.17},{"rooms_shortname":"BRKX","rooms_type":"Tiered Large Group","transs":70},{"rooms_shortname":"BRKX","rooms_type":"Open Design General Purpose","transs":24},{"rooms_shortname":"BIOL","rooms_type":"Tiered Large Group","transs":152},{"rooms_shortname":"BIOL","rooms_type":"Small Group","transs":16},{"rooms_shortname":"AUDX","rooms_type":"Small Group","transs":20.5},{"rooms_shortname":"ANSO","rooms_type":"Small Group","transs":32},{"rooms_shortname":"ANSO","rooms_type":"Open Design General Purpose","transs":90},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group","transs":88.25},{"rooms_shortname":"ANGU","rooms_type":"TBD","transs":32},{"rooms_shortname":"ANGU","rooms_type":"Small Group","transs":21.75},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose","transs":46.57},{"rooms_shortname":"ANGU","rooms_type":"Case Style","transs":49.38},{"rooms_shortname":"ALRD","rooms_type":"Open Design General Purpose","transs":28},{"rooms_shortname":"ALRD","rooms_type":"Case Style","transs":72},{"rooms_shortname":"AERL","rooms_type":"Tiered Large Group","transs":144}]}';
let responseCount = '{"render":"TABLE","result":[{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group","transs":4},{"rooms_shortname":"WOOD","rooms_type":"Small Group","transs":6},{"rooms_shortname":"WESB","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"UCLL","rooms_type":"Studio Lab","transs":1},{"rooms_shortname":"UCLL","rooms_type":"Small Group","transs":1},{"rooms_shortname":"UCLL","rooms_type":"Open Design General Purpose","transs":2},{"rooms_shortname":"SWNG","rooms_type":"Tiered Large Group","transs":3},{"rooms_shortname":"SWNG","rooms_type":"Small Group","transs":1},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"SRC","rooms_type":"TBD","transs":1},{"rooms_shortname":"SPPH","rooms_type":"Small Group","transs":5},{"rooms_shortname":"SPPH","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"SOWK","rooms_type":"Small Group","transs":2},{"rooms_shortname":"SOWK","rooms_type":"Open Design General Purpose","transs":3},{"rooms_shortname":"SCRF","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"SCRF","rooms_type":"Small Group","transs":6},{"rooms_shortname":"PHRM","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"PHRM","rooms_type":"Small Group","transs":2},{"rooms_shortname":"PHRM","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"PCOH","rooms_type":"Small Group","transs":1},{"rooms_shortname":"PCOH","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"OSBO","rooms_type":"Small Group","transs":2},{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"ORCH","rooms_type":"Studio Lab","transs":2},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose","transs":3},{"rooms_shortname":"ORCH","rooms_type":"Active Learning","transs":5},{"rooms_shortname":"MGYM","rooms_type":"Open Design General Purpose","transs":2},{"rooms_shortname":"MCML","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"MCML","rooms_type":"Small Group","transs":4},{"rooms_shortname":"MCML","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"MCML","rooms_type":"Case Style","transs":1},{"rooms_shortname":"MCLD","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"MCLD","rooms_type":"Small Group","transs":1},{"rooms_shortname":"MCLD","rooms_type":"Open Design General Purpose","transs":2},{"rooms_shortname":"MATX","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"MATH","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"MATH","rooms_type":"Small Group","transs":3},{"rooms_shortname":"MATH","rooms_type":"Open Design General Purpose","transs":2},{"rooms_shortname":"LSK","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"LSK","rooms_type":"Open Design General Purpose","transs":2},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"LASR","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"LASR","rooms_type":"Small Group","transs":1},{"rooms_shortname":"LASR","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"LASR","rooms_type":"","transs":1},{"rooms_shortname":"IONA","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"IONA","rooms_type":"Case Style","transs":1},{"rooms_shortname":"IBLC","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"IBLC","rooms_type":"Small Group","transs":7},{"rooms_shortname":"IBLC","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"IBLC","rooms_type":"Case Style","transs":1},{"rooms_shortname":"HENN","rooms_type":"Tiered Large Group","transs":3},{"rooms_shortname":"HENN","rooms_type":"Small Group","transs":2},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"HEBB","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"GEOG","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"GEOG","rooms_type":"Small Group","transs":2},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose","transs":4},{"rooms_shortname":"FSC","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"FSC","rooms_type":"Small Group","transs":4},{"rooms_shortname":"FSC","rooms_type":"Case Style","transs":1},{"rooms_shortname":"FRDM","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"FORW","rooms_type":"Small Group","transs":2},{"rooms_shortname":"FORW","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"FNH","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"FNH","rooms_type":"Small Group","transs":3},{"rooms_shortname":"FNH","rooms_type":"Open Design General Purpose","transs":2},{"rooms_shortname":"ESB","rooms_type":"Tiered Large Group","transs":3},{"rooms_shortname":"EOSM","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"DMP","rooms_type":"Tiered Large Group","transs":3},{"rooms_shortname":"DMP","rooms_type":"Small Group","transs":1},{"rooms_shortname":"CIRS","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group","transs":4},{"rooms_shortname":"CHBE","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"CHBE","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"CEME","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"CEME","rooms_type":"Small Group","transs":2},{"rooms_shortname":"CEME","rooms_type":"Case Style","transs":3},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group","transs":6},{"rooms_shortname":"BUCH","rooms_type":"Small Group","transs":6},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose","transs":6},{"rooms_shortname":"BUCH","rooms_type":"Case Style","transs":4},{"rooms_shortname":"BRKX","rooms_type":"Tiered Large Group","transs":1},{"rooms_shortname":"BRKX","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"BIOL","rooms_type":"Tiered Large Group","transs":2},{"rooms_shortname":"BIOL","rooms_type":"Small Group","transs":1},{"rooms_shortname":"AUDX","rooms_type":"Small Group","transs":2},{"rooms_shortname":"ANSO","rooms_type":"Small Group","transs":3},{"rooms_shortname":"ANSO","rooms_type":"Open Design General Purpose","transs":1},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group","transs":5},{"rooms_shortname":"ANGU","rooms_type":"TBD","transs":1},{"rooms_shortname":"ANGU","rooms_type":"Small Group","transs":3},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose","transs":6},{"rooms_shortname":"ANGU","rooms_type":"Case Style","transs":4},{"rooms_shortname":"ALRD","rooms_type":"Open Design General Purpose","transs":2},{"rooms_shortname":"ALRD","rooms_type":"Case Style","transs":2},{"rooms_shortname":"AERL","rooms_type":"Tiered Large Group","transs":1}]}';
let responseSum = '{"render":"TABLE","result":[{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":442},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":700},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":375}]}';
let responseBanyak = '{"render":"TABLE","result":[{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"WOOD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WOOD","rooms_type":"Small Group"},{"rooms_shortname":"WESB","rooms_type":"Tiered Large Group"},{"rooms_shortname":"WESB","rooms_type":"Tiered Large Group"},{"rooms_shortname":"UCLL","rooms_type":"Studio Lab"},{"rooms_shortname":"UCLL","rooms_type":"Small Group"},{"rooms_shortname":"UCLL","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"UCLL","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Tiered Large Group"},{"rooms_shortname":"SWNG","rooms_type":"Tiered Large Group"},{"rooms_shortname":"SWNG","rooms_type":"Tiered Large Group"},{"rooms_shortname":"SWNG","rooms_type":"Tiered Large Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Small Group"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SWNG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SRC","rooms_type":"TBD"},{"rooms_shortname":"SRC","rooms_type":"TBD"},{"rooms_shortname":"SRC","rooms_type":"TBD"},{"rooms_shortname":"SPPH","rooms_type":"Small Group"},{"rooms_shortname":"SPPH","rooms_type":"Small Group"},{"rooms_shortname":"SPPH","rooms_type":"Small Group"},{"rooms_shortname":"SPPH","rooms_type":"Small Group"},{"rooms_shortname":"SPPH","rooms_type":"Small Group"},{"rooms_shortname":"SPPH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SOWK","rooms_type":"Small Group"},{"rooms_shortname":"SOWK","rooms_type":"Small Group"},{"rooms_shortname":"SOWK","rooms_type":"Small Group"},{"rooms_shortname":"SOWK","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SOWK","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SOWK","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SOWK","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"SCRF","rooms_type":"Tiered Large Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"SCRF","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"PHRM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Small Group"},{"rooms_shortname":"PHRM","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"PCOH","rooms_type":"Small Group"},{"rooms_shortname":"PCOH","rooms_type":"Small Group"},{"rooms_shortname":"PCOH","rooms_type":"Small Group"},{"rooms_shortname":"PCOH","rooms_type":"Small Group"},{"rooms_shortname":"PCOH","rooms_type":"Small Group"},{"rooms_shortname":"PCOH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"PCOH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"PCOH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"OSBO","rooms_type":"Small Group"},{"rooms_shortname":"OSBO","rooms_type":"Small Group"},{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Studio Lab"},{"rooms_shortname":"ORCH","rooms_type":"Studio Lab"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"ORCH","rooms_type":"Active Learning"},{"rooms_shortname":"MGYM","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MGYM","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MCML","rooms_type":"Tiered Large Group"},{"rooms_shortname":"MCML","rooms_type":"Tiered Large Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Small Group"},{"rooms_shortname":"MCML","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MCML","rooms_type":"Case Style"},{"rooms_shortname":"MCLD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"MCLD","rooms_type":"Tiered Large Group"},{"rooms_shortname":"MCLD","rooms_type":"Small Group"},{"rooms_shortname":"MCLD","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MCLD","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MCLD","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MATX","rooms_type":"Tiered Large Group"},{"rooms_shortname":"MATH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"MATH","rooms_type":"Small Group"},{"rooms_shortname":"MATH","rooms_type":"Small Group"},{"rooms_shortname":"MATH","rooms_type":"Small Group"},{"rooms_shortname":"MATH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MATH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MATH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"MATH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"LSK","rooms_type":"Tiered Large Group"},{"rooms_shortname":"LSK","rooms_type":"Tiered Large Group"},{"rooms_shortname":"LSK","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"LSK","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group"},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group"},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group"},{"rooms_shortname":"LASR","rooms_type":"Tiered Large Group"},{"rooms_shortname":"LASR","rooms_type":"Tiered Large Group"},{"rooms_shortname":"LASR","rooms_type":"Small Group"},{"rooms_shortname":"LASR","rooms_type":"Small Group"},{"rooms_shortname":"LASR","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"LASR","rooms_type":""},{"rooms_shortname":"IONA","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"IONA","rooms_type":"Case Style"},{"rooms_shortname":"IBLC","rooms_type":"Tiered Large Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Small Group"},{"rooms_shortname":"IBLC","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"IBLC","rooms_type":"Case Style"},{"rooms_shortname":"HENN","rooms_type":"Tiered Large Group"},{"rooms_shortname":"HENN","rooms_type":"Tiered Large Group"},{"rooms_shortname":"HENN","rooms_type":"Tiered Large Group"},{"rooms_shortname":"HENN","rooms_type":"Small Group"},{"rooms_shortname":"HENN","rooms_type":"Small Group"},{"rooms_shortname":"HENN","rooms_type":"Small Group"},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group"},{"rooms_shortname":"HEBB","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"HEBB","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"HEBB","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"GEOG","rooms_type":"Tiered Large Group"},{"rooms_shortname":"GEOG","rooms_type":"Small Group"},{"rooms_shortname":"GEOG","rooms_type":"Small Group"},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"GEOG","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"FSC","rooms_type":"Tiered Large Group"},{"rooms_shortname":"FSC","rooms_type":"Tiered Large Group"},{"rooms_shortname":"FSC","rooms_type":"Small Group"},{"rooms_shortname":"FSC","rooms_type":"Small Group"},{"rooms_shortname":"FSC","rooms_type":"Small Group"},{"rooms_shortname":"FSC","rooms_type":"Small Group"},{"rooms_shortname":"FSC","rooms_type":"Small Group"},{"rooms_shortname":"FSC","rooms_type":"Small Group"},{"rooms_shortname":"FSC","rooms_type":"Case Style"},{"rooms_shortname":"FSC","rooms_type":"Case Style"},{"rooms_shortname":"FRDM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"FORW","rooms_type":"Small Group"},{"rooms_shortname":"FORW","rooms_type":"Small Group"},{"rooms_shortname":"FORW","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"FNH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"FNH","rooms_type":"Small Group"},{"rooms_shortname":"FNH","rooms_type":"Small Group"},{"rooms_shortname":"FNH","rooms_type":"Small Group"},{"rooms_shortname":"FNH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"FNH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ESB","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ESB","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ESB","rooms_type":"Tiered Large Group"},{"rooms_shortname":"EOSM","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"DMP","rooms_type":"Tiered Large Group"},{"rooms_shortname":"DMP","rooms_type":"Tiered Large Group"},{"rooms_shortname":"DMP","rooms_type":"Tiered Large Group"},{"rooms_shortname":"DMP","rooms_type":"Small Group"},{"rooms_shortname":"DMP","rooms_type":"Small Group"},{"rooms_shortname":"CIRS","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHEM","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHBE","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHBE","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CHBE","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"CEME","rooms_type":"Tiered Large Group"},{"rooms_shortname":"CEME","rooms_type":"Small Group"},{"rooms_shortname":"CEME","rooms_type":"Small Group"},{"rooms_shortname":"CEME","rooms_type":"Case Style"},{"rooms_shortname":"CEME","rooms_type":"Case Style"},{"rooms_shortname":"CEME","rooms_type":"Case Style"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Small Group"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BUCH","rooms_type":"Case Style"},{"rooms_shortname":"BUCH","rooms_type":"Case Style"},{"rooms_shortname":"BUCH","rooms_type":"Case Style"},{"rooms_shortname":"BUCH","rooms_type":"Case Style"},{"rooms_shortname":"BUCH","rooms_type":"Case Style"},{"rooms_shortname":"BUCH","rooms_type":"Case Style"},{"rooms_shortname":"BRKX","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BRKX","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"BIOL","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BIOL","rooms_type":"Tiered Large Group"},{"rooms_shortname":"BIOL","rooms_type":"Small Group"},{"rooms_shortname":"BIOL","rooms_type":"Small Group"},{"rooms_shortname":"AUDX","rooms_type":"Small Group"},{"rooms_shortname":"AUDX","rooms_type":"Small Group"},{"rooms_shortname":"ANSO","rooms_type":"Small Group"},{"rooms_shortname":"ANSO","rooms_type":"Small Group"},{"rooms_shortname":"ANSO","rooms_type":"Small Group"},{"rooms_shortname":"ANSO","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"Tiered Large Group"},{"rooms_shortname":"ANGU","rooms_type":"TBD"},{"rooms_shortname":"ANGU","rooms_type":"Small Group"},{"rooms_shortname":"ANGU","rooms_type":"Small Group"},{"rooms_shortname":"ANGU","rooms_type":"Small Group"},{"rooms_shortname":"ANGU","rooms_type":"Small Group"},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ANGU","rooms_type":"Case Style"},{"rooms_shortname":"ALRD","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ALRD","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ALRD","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"ALRD","rooms_type":"Case Style"},{"rooms_shortname":"ALRD","rooms_type":"Case Style"},{"rooms_shortname":"AERL","rooms_type":"Tiered Large Group"}]}';
let responseDouble = '{"render":"TABLE","result":[{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":442,"wuanjirrrr":442},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":700,"wuanjirrrr":350},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":375,"wuanjirrrr":375}]}';
let responseEmptyApply = '{"render":"TABLE","result":[{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose"},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group"},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group"}]}';
let response4Apply = '{"render":"TABLE","result":[{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":442,"wuanjirrrr":442,"ngentot":1,"anjing":442},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":700,"wuanjirrrr":350,"ngentot":1,"anjing":350},{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":375,"wuanjirrrr":375,"ngentot":1,"anjing":375}]}';
let response4ApplyNoOrder = '{"render":"TABLE","result":[{"rooms_shortname":"HEBB","rooms_type":"Tiered Large Group","transs":375,"wuanjirrrr":375,"ngentot":1,"anjing":375},{"rooms_shortname":"LSC","rooms_type":"Tiered Large Group","transs":700,"wuanjirrrr":350,"ngentot":1,"anjing":350},{"rooms_shortname":"OSBO","rooms_type":"Open Design General Purpose","transs":442,"wuanjirrrr":442,"ngentot":1,"anjing":442}]}';

describe("D3Spec", function () {

    let query1: QueryRequest;
    query1 = {"WHERE": {"IS": {"rooms_address": "*Agronomy*"}}, "OPTIONS": {"COLUMNS": ["rooms_fullname", "rooms_name"], "ORDER": {"dir": "UP","keys":["rooms_name","rooms_fullname"]}, "FORM": "TABLE"}};
    let query2: QueryRequest;
    query2 = {"WHERE": {"IS": {"rooms_address": "*Agronomy*"}}, "OPTIONS": {"COLUMNS": ["rooms_fullname","rooms_type", "rooms_name"], "ORDER": {"dir": "UP","keys":["rooms_fullname","rooms_type","rooms_name"]}, "FORM": "TABLE"}};
    let query3: QueryRequest;
    query3 = {"WHERE": {}, "OPTIONS": { "COLUMNS": [ "rooms_furniture"], "ORDER": "rooms_furniture", "FORM": "TABLE"},"TRANSFORMATIONS": {"GROUP": ["rooms_furniture"], "APPLY": []}};
    let query4: QueryRequest;
    query4 = {
        "WHERE": {
            "AND": [{
                "IS": {
                    "rooms_furniture": "*Tables*"
                }
            }, {
                "GT": {
                    "rooms_seats": 300
                }
            }]
        },
        "OPTIONS": {
            "COLUMNS": [
                "rooms_shortname",
                "rooms_type"
            ],
            "ORDER": {
                "dir": "DOWN",
                "keys": ["rooms_shortname"]
            },
            "FORM": "TABLE"
        },
        "TRANSFORMATIONS": {
            "GROUP": ["rooms_shortname","rooms_type"],
            "APPLY": []
        }
    };
    let query5: QueryRequest;
    query5 = {"WHERE": {"AND": [{"IS": {"rooms_furniture": "*Tables*"}}, {"GT": {"rooms_seats": 300}}]}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"MAX":"rooms_seats"}}]}};
    let query6: QueryRequest;
    query6 = {"WHERE": {}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"MIN":"rooms_seats"}}]}};
    let query7: QueryRequest;
    query7 = {"WHERE": {}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"AVG":"rooms_seats"}}]}};
    let query8: QueryRequest;
    query8 = {"WHERE": {}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"COUNT":"rooms_seats"}}]}};
    let query9: QueryRequest;
    query9 = {"WHERE": {"AND": [{"IS": {"rooms_furniture": "*Tables*"}}, {"GT": {"rooms_seats": 300}}]}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"SUM":"rooms_seats"}}]}};
    let query10: QueryRequest;
    query10 = {"WHERE": {}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}};
    let query11: QueryRequest;
    query11 = {"WHERE": {"AND": [{"IS": {"rooms_furniture": "*Tables*"}}, {"GT": {"rooms_seats": 300}}]}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs","wuanjirrrr"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"SUM":"rooms_seats"}},{"wuanjirrrr":{"AVG":"rooms_seats"}}]}};
    let query12: QueryRequest;
    query12 = {"WHERE": {"AND": [{"IS": {"rooms_furniture": "*Tables*"}}, {"GT": {"rooms_seats": 300}}]}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": []}};
    let query13: QueryRequest;
    query13 = {"WHERE": {"AND": [{"IS": {"rooms_furniture": "*Tables*"}}, {"GT": {"rooms_seats": 300}}]}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs","wuanjirrrr","ngentot","anjing"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"SUM":"rooms_seats"}},{"wuanjirrrr":{"AVG":"rooms_seats"}},{"ngentot":{"COUNT":"rooms_seats"}},{"anjing":{"MIN":"rooms_seats"}}]}};
    let query14: QueryRequest;
    query14 = {"WHERE": {"AND": [{"IS": {"rooms_furniture": "*Tables*"}}, {"GT": {"rooms_seats": 300}}]}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs","wuanjirrrr","ngentot","anjing"], "ORDER": {"dir": "DOWN", "keys": ["rooms_shortname","rooms_type"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type","anjing"], "APPLY": [{"transs":{"SUM":"rooms_seats"}},{"wuanjirrrr":{"AVG":"rooms_seats"}},{"ngentot":{"COUNT":"rooms_seats"}},{"anjing":{"MIN":"rooms_seats"}}]}};
    let query15: QueryRequest;
    query15 = {"WHERE": {"AND": [{"IS": {"rooms_furniture": "*Tables*"}}, {"GT": {"rooms_seats": 300}}]}, "OPTIONS": {"COLUMNS": ["rooms_shortname", "rooms_type", "transs","wuanjirrrr","ngentot","anjing"], "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP": ["rooms_shortname","rooms_type"], "APPLY": [{"transs":{"SUM":"rooms_seats"}},{"wuanjirrrr":{"AVG":"rooms_seats"}},{"ngentot":{"COUNT":"rooms_seats"}},{"anjing":{"MIN":"rooms_seats"}}]}};
    let query16: QueryRequest;
    query16 = {
        "WHERE": {},
        "OPTIONS": {
            "COLUMNS": [
                "courses_instructor","courses_uuid","numberofcourses"
            ],
            "ORDER": {
                "dir": "DOWN",
                "keys": ["courses_instructor"]
            },
            "FORM": "TABLE"
        },
        "TRANSFORMATIONS": {
            "GROUP": ["courses_instructor","courses_uuid"],
            "APPLY": [{"numberofcourses":{"COUNT":"courses_uuid"}}]
        }
    };
    let query17: QueryRequest;
    query17 = {
        "WHERE": {"IS":{"courses_instructor": "* *"}},
        "OPTIONS": {
            "COLUMNS": [
                "courses_instructor"
            ],
            "ORDER": {
                "dir": "DOWN",
                "keys": ["courses_instructor"]
            },
            "FORM": "TABLE"
        }
    };
    let query18: QueryRequest;
    query18 = {"WHERE": {}, "OPTIONS": {"COLUMNS": ["courses_dept", "ave"], "ORDER": {"dir": "UP","keys":["courses_dept"]}, "FORM": "TABLE"}, "TRANSFORMATIONS": {"GROUP":["courses_dept"], "APPLY": [{"ave":{"AVG":"courses_avg"}}]}};

    let query19: QueryRequest;
    query19 = {
        "WHERE": {},
        "OPTIONS": {
            "COLUMNS": [
                "courses_instuctor","courses_uuid","numberofcourses"
            ],
            "ORDER": {
                "dir": "DOWN",
                "keys": ["courses_instructor"]
            },
            "FORM": "TABLE"
        },
        "TRANSFORMATIONS": {
            "GROUP": ["courses_instructor","courses_uuid"],
            "APPLY": [{"numberofcourses":{"COUNT":"courses_uuid"}}]
        }
    };
    let query20: QueryRequest;
    query20 = {
        "WHERE": {},
        "OPTIONS": {
            "COLUMNS": [
                "courses_instructor","courses_uuid","numberofcourses"
            ],
            "ORDER": {
                "dir": "DOWN",
                "keys": ["courses_instructor"]
            },
            "FORM": "TABLE"
        },
        "TRANSFORMATIONS": {
            "GROUP": ["courses_instructor","numberofcourses"],
            "APPLY": [{"numberofcourses":{"COUNT":"courses_uuid"}}]
        }
    };
    let query21: QueryRequest;
    query21 = {
        "WHERE": {},
        "OPTIONS": {
            "COLUMNS": [
                "courses_instructor","courses_uuid","numberofcourses"
            ],
            "ORDER": {
                "dir": "Middle",
                "keys": ["courses_instructor"]
            },
            "FORM": "TABLE"
        },
        "TRANSFORMATIONS": {
            "GROUP": ["courses_instructor","courses_uuid"],
            "APPLY": [{"numberofcourses":{"COUNT":"courses_uuid"}}]
        }
    };

    let query22:QueryRequest;
    query22 = {
        "WHERE": {},
        "OPTIONS": {
            "COLUMNS": [
                "courses_instructor","courses_uuid","numberofcourses"
            ],
            "ORDER": {
                "dir": "UP",
                "keys": ["courses_instructor"]
            },
            "FORM": "TABLE"
        },
        "TRANSFORMATIONS": {
            "GROUP": ["courses_instructor","courses_uuid"],
            "APPLY": [{"courses_instructor":{"COUNT":"courses_uuid"}}]
        }
    };

    let query23: QueryRequest;
    query23 = {
        "WHERE": {},
        "OPTIONS": {
            "COLUMNS": [
                "courses_instructor","courses_uuid","numberofcourses"
            ],
            "ORDER": {
                "dir": "UP",
                "keys": ["courses_instructor"]
            },
            "FORM": "TABLE"
        },
        "TRANSFORMATIONS": {
            "GROUP": ["courses_instructor","courses_uuid"],
            "APPLY": [{"apalu":{"COUNT":"courses_uuid"}}]
        }
    };

    function sanityCheck(response: InsightResponse) {
        expect(response).to.have.property('code');
        expect(response).to.have.property('body');
        expect(response.code).to.be.a('number');
        //testing
    }

    let myIR: InsightFacade = null;

    before(function () {
        Log.test('Before: ' + (<any>this).test.parent.title);
        var testerArray: String[] = [];
    });

    beforeEach(function () {
        Log.test('BeforeTest: ' + (<any>this).currentTest.title);
        myIR = new InsightFacade();
        var testerArray: String[] = [];
    });

    after(function () {
        Log.test('After: ' + (<any>this).test.parent.title);
        myIR = null;
    });

    afterEach(function () {
        Log.test('AfterTest: ' + (<any>this).currentTest.title);
    });

    it("Add rooms firs time", function () {
        return myIR.addDataset("rooms", zip3)
            .then(function (value) {
                Log.test('Code: ' + value.code);
                Log.test('Body: ' + JSON.stringify(value.body));
                // expect(value.code).to.equal(204);
            }).catch(function (err) {
                Log.test('Code: ' + err.code);
                Log.test('Body: ' + JSON.stringify(err.body));
                // expect.fail();
            });
    });

    it("Add courses firs time", function () {
        return myIR.addDataset("courses", zip)
            .then(function (value) {
                Log.test('Code: ' + value.code);
                Log.test('Body: ' + JSON.stringify(value.body));
                // expect(value.code).to.equal(204);
            }).catch(function (err) {
                Log.test('Code: ' + err.code);
                Log.test('Body: ' + JSON.stringify(err.body));
                // expect.fail();
            });
    });

    it("Test rooms_address", function () {
        return myIR.performQuery(query1).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseAddress);
        }).catch(function (err) {
            Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Triple", function () {
        return myIR.performQuery(query2).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responsetriple);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Basic", function () {
        return myIR.performQuery(query3).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseBasic);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Max", function () {
        return myIR.performQuery(query5).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseMax);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Min", function () {
        return myIR.performQuery(query6).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseMin);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test AVG", function () {
        return myIR.performQuery(query7).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseAvg);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Count", function () {
        return myIR.performQuery(query8).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseCount);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Sum", function () {
        return myIR.performQuery(query9).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseSum);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Banyak", function () {
        return myIR.performQuery(query10).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseBanyak);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Double Apply", function () {
        return myIR.performQuery(query11).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseDouble);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Empty Apply", function () {
        return myIR.performQuery(query12).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(responseEmptyApply);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test 4 Apply", function () {
            return myIR.performQuery(query13).then(function (response: InsightResponse) {
                // Log.test('The Response is: ' + JSON.stringify(response.body));
                expect(response.code).to.equal(200);
                expect(JSON.stringify(response.body)).to.equal(response4Apply);
            }).catch(function (err) {
                Log.test('Error: ' + JSON.stringify(err));
                expect.fail();
            })
        });

    it("Test Gagal", function () {
        return myIR.performQuery(query14).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + response.body);
            expect.fail();
        }).catch(function (err: InsightResponse) {
            // Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });

    it("Test 4 Apply No Order", function () {
        return myIR.performQuery(query15).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            expect(JSON.stringify(response.body)).to.equal(response4ApplyNoOrder);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Sacrilegous Half", function () {
        return myIR.performQuery(query17).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            // expect(JSON.stringify(response.body)).to.equal(response4ApplyNoOrder);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });

    it("Test Sacrilegous", function () {
        return myIR.performQuery(query16).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            // expect(JSON.stringify(response.body)).to.equal(response4ApplyNoOrder);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });
    it("Test Taurus", function () {
        return myIR.performQuery(query18).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + JSON.stringify(response.body));
            expect(response.code).to.equal(200);
            // expect(JSON.stringify(response.body)).to.equal(response4ApplyNoOrder);
        }).catch(function (err) {
            // Log.test('Error: ' + JSON.stringify(err));
            expect.fail();
        })
    });
    it("Test Gagal1", function () {
        return myIR.performQuery(query19).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + response.body);
            expect.fail();
        }).catch(function (err: InsightResponse) {
            // Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });it("Test Gagal2", function () {
        return myIR.performQuery(query20).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + response.body);
            expect.fail();
        }).catch(function (err: InsightResponse) {
            // Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });it("Test Gagal3", function () {
        return myIR.performQuery(query21).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + response.body);
            expect.fail();
        }).catch(function (err: InsightResponse) {
            // Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });it("Test Gagal4", function () {
        return myIR.performQuery(query22).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + response.body);
            expect.fail();
        }).catch(function (err: InsightResponse) {
            // Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });it("Test Gagal5", function () {
        return myIR.performQuery(query23).then(function (response: InsightResponse) {
            // Log.test('The Response is: ' + response.body);
            expect.fail();
        }).catch(function (err: InsightResponse) {
            // Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });

});
/**
 * Created by nicoa on 2017-01-31.
 */