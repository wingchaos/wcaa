// fiddle: http://jsfiddle.net/v1ddnsvh/8/
/* global window */

var IMAGE_PATH = 'icons';
var EncountersArray = [];

var React = window.React;

var formatNumber = function(number)  {
    number = parseFloat(number, 10);  

    return number.toFixed(0);
};
var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){CombatantCompact[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;CombatantCompact.prototype=Object.create(____SuperProtoOf____Class0);CombatantCompact.prototype.constructor=CombatantCompact;CombatantCompact.__superConstructor__=____Class0;function CombatantCompact(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
    Object.defineProperty(CombatantCompact.prototype,"jobImage",{writable:true,configurable:true,value:function(job) {"use strict";
        if (window.JSFIDDLE) {
            return window.GLOW_ICONS[job.toLowerCase()];
        }

        return IMAGE_PATH + './' + job.toLowerCase() + '.png';
    }});

    Object.defineProperty(CombatantCompact.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        //var width = parseInt(this.props.data.damage / this.props.encounterDamage * 100, 10) + '%';
        var width = Math.min(100, parseInt(this.props.total / this.props.max * 100, 10)) + '%';

        return (
            this.props.perSecond === '---' ? null :
            React.createElement("li", {
                className: 'row ' + this.props.job.toLowerCase() + (this.props.isSelf ? ' self' : ''), 
                onClick: this.props.onClick}, 
                React.createElement("div", {
                    className: "bar", 
                    style: {width: width}}), 
                    React.createElement("div", {className: "text-overlay"}, 
                        React.createElement("div", {className: "stats"}, 
                            React.createElement("span", {className: "total"}, 
                                this.props.totalFormatted
                            ), 

                            this.props.additional ?
                            React.createElement("span", {className: "additional"}, 
                                "[", this.props.additional, "]"
                            ) : null, 


                            "(", 
                            React.createElement("span", {className: "ps"}, 
                                this.props.perSecond, ","
                            ), 

                            React.createElement("span", {className: "percent"}, 
                                this.props.percentage
                            ), 
                            ")"
                        ), 
                        React.createElement("div", {className: "info"}, 
                            React.createElement("span", {className: "job-icon"}, 
                                React.createElement("img", {src: this.jobImage(this.props.job)})
                            ), 
                            React.createElement("span", {className: "rank"}, 
                                this.props.rank, "."
                            ), 
                            React.createElement("span", {className: "character-name"}, 
                                this.props.characterName
                          
                            )
                        )
                    )
            )
        );
    }});

CombatantCompact.defaultProps = {
    onClick:function() {}
};

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){ChartView[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;ChartView.prototype=Object.create(____SuperProtoOf____Class1);ChartView.prototype.constructor=ChartView;ChartView.__superConstructor__=____Class1;function ChartView(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
    Object.defineProperty(ChartView.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        return (
            React.createElement("div", {className: "chart-view"}
            )
        );
    }});


var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Header[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Header.prototype=Object.create(____SuperProtoOf____Class2);Header.prototype.constructor=Header;Header.__superConstructor__=____Class2;
    function Header(props) {"use strict";
        ____Class2.call(this,props);
        this.state = {
            expanded: false,
            showEncountersList: false
        };
    }

    Object.defineProperty(Header.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        if (nextProps.encounter.encdps === '---') {
            return false;
        }

        return true;
    }});

    Object.defineProperty(Header.prototype,"handleExtraDetails",{writable:true,configurable:true,value:function(e) {"use strict";
        this.props.onExtraDetailsClick(e);

        this.setState({
            expanded: !this.state.expanded
        });
    }});

    /**
     * Show dropdown for list of encounters
     */
    Object.defineProperty(Header.prototype,"handleEncounterClick",{writable:true,configurable:true,value:function(e) {"use strict";
        this.setState({
            showEncountersList: !this.state.showEncountersList
        });
    }});

    Object.defineProperty(Header.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var encounter = this.props.encounter;
        var rdps = parseFloat(encounter.encdps);
        var rdps_max = 0;

        if (!isNaN(rdps) && rdps !== Infinity) {
            rdps_max = Math.max(rdps_max, rdps);
        }

        return (
            React.createElement("div", {className: ("header " + (this.state.expanded ? '' : 'collapsed'))}, 
                React.createElement("div", {className: "encounter-header"}, 
                    React.createElement("div", {className: "encounter-data ff-header"}, 
                        React.createElement("span", {className: "target-name dropdown-parent", onClick: this.handleEncounterClick.bind(this)}, 
                            encounter.title, 
                            React.createElement("div", {className: ("dropdown-menu encounters-list-dropdown " + (this.state.showEncountersList ? '' : 'hidden'))}, 
                                React.createElement("div", {onClick: this.props.onSelectEncounter.bind(this, null)}, 
                                    "Current Fight"
                                ), 

                                EncountersArray.map(function(encounter, i) {
                                    return (
                                        React.createElement("div", {key: i, onClick: this.props.onSelectEncounter.bind(this, i)}, 
                                            encounter.Encounter.title
                                        )
                                    );

                                }.bind(this))
                            )
                        ), 
                        React.createElement("span", {className: "duration"}, 
                            "(", encounter.duration, ")"
                        ), 
                        React.createElement("span", {className: ("arrow " + (this.state.expanded ? 'down' : 'up')), onClick: this.handleExtraDetails.bind(this)})
                    ), 

                    React.createElement("div", {
                        className: "chart-view-switcher", 
                        onClick: this.props.onViewChange}, 
                        this.props.currentView
                    )
                ), 
                React.createElement("div", {className: "extra-details"}, 
                    React.createElement("div", {className: "extra-row damage"}, 
                       React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "团队秒伤"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                formatNumber(encounter.ENCDPS) 
                            )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "团队伤害"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                formatNumber(encounter.damage)							
                     
					      )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "团队死亡"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['deaths']
				 )
                        ), 
                        React.createElement("div", {className: "cell"}, 
                            React.createElement("span", {className: "label ff-header"}, "团队驱散"), 
                            React.createElement("span", {className: "value ff-text"}, 
                                encounter['cures']
					
                       
                            )
                        )
                    )
                )
            )
        );
    }});


Header.defaultProps = {
    encounter: {},
    onViewChange:function() {},
    onSelectEncounter:function() {},
    onExtraDetailsClick:function() {}
};


var ____Class3=React.Component;for(var ____Class3____Key in ____Class3){if(____Class3.hasOwnProperty(____Class3____Key)){Combatants[____Class3____Key]=____Class3[____Class3____Key];}}var ____SuperProtoOf____Class3=____Class3===null?null:____Class3.prototype;Combatants.prototype=Object.create(____SuperProtoOf____Class3);Combatants.prototype.constructor=Combatants;Combatants.__superConstructor__=____Class3;function Combatants(){"use strict";if(____Class3!==null){____Class3.apply(this,arguments);}}
    Object.defineProperty(Combatants.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        // if data is empty then don't re-render
        if (Object.getOwnPropertyNames(nextProps.data).length === 0) {
            return false;
        }

        return true;
    }});

    Object.defineProperty(Combatants.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var rows = [];
        var maxRows = 12;
        var isDataArray = _.isArray(this.props.data);
        var dataArray = isDataArray ? this.props.data : Object.keys(this.props.data);
        var limit = Math.max(dataArray.length, maxRows);
        var names = dataArray.slice(0, maxRows-1);
        var maxdps = false;
        var combatant;
        var row;
        var isSelf;
        var rank = 1;
        var stats;

        for (var i = 0; i < names.length; i++) {
            combatant = isDataArray ? this.props.data[i] : this.props.data[names[i]];
            stats = null;

            isSelf = combatant.name === 'YOU' || combatant.name === 'You';

            if (combatant.Job !== "") {
                // should probably fix this
                if (this.props.currentView === '输出治疗') {
                    if (parseInt(combatant.healed, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.healed);
                        }
                        stats = {
                            job: combatant.Job || '',  //职业图标
                            characterName: combatant.name,    //玩家名字
                            total: combatant.healed,     //治疗量色条排列
                            totalFormatted: formatNumber(combatant.healed),       //治疗量
							perSecond: formatNumber(combatant.enchps),     //每秒治疗
                            additional: combatant['OverHealPct'],  //过量治疗
                            percentage: combatant['healed%']   //治疗%
                        }
                    }
                }
                else if (this.props.currentView === '承受伤害') {
                    if (parseInt(combatant.damagetaken, 10) > 0) {
                        if (!maxdps) {
                            maxdps = parseFloat(combatant.damagetaken);
                        }
                        stats = {
                            job: combatant.Job || '',   //职业图标
                            characterName: combatant.name,   //玩家名字
                            total: combatant.damagetaken,   //承受伤害色条排列                         
							totalFormatted: formatNumber(combatant.damagetaken),   //承受伤害总量
                            perSecond: combatant.ParryPct,   // 招架%
                            percentage: combatant.BlockPct   //格挡%
                        }
                    }
                }
                else {
                    if (!maxdps) {
                        maxdps = parseFloat(combatant.damage);
                    }
                    stats = {
                        job: combatant.Job || '',     //职业图标
                        characterName: combatant.name,    //玩家名字
                        total: combatant.damage,    //伤害色条排列
                        totalFormatted: formatNumber(combatant.damage),    //总伤害
                        perSecond: formatNumber(combatant.encdps),      //每妙伤害
                        percentage: combatant['damage%']     //伤害%
                    }
                }

                if (stats) {
                    rows.push(
                        React.createElement(CombatantCompact, React.__spread({
                            onClick: this.props.onClick, 
                            encounterDamage: this.props.encounterDamage, 
                            rank: rank, 
                            data: combatant, 
                            isSelf: isSelf, 
                            key: combatant.name, 
                            max: maxdps}, 
                            stats)
                        )
                    );
                    rank++;
                }
            }

        }

        return (
            React.createElement("ul", {className: "combatants"}, 
                rows
            )
        );
    }});


Combatants.defaultProps = {
    onClick:function() {}
};

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){DamageMeter[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;DamageMeter.prototype=Object.create(____SuperProtoOf____Class4);DamageMeter.prototype.constructor=DamageMeter;DamageMeter.__superConstructor__=____Class4;
    function DamageMeter(props) {"use strict";
        ____Class4.call(this,props);
        this.state = {
            currentViewIndex: 0
        };
    }

    Object.defineProperty(DamageMeter.prototype,"shouldComponentUpdate",{writable:true,configurable:true,value:function(nextProps, nextState) {"use strict";
        if (nextProps.parseData.Encounter.encdps === '---') {
            return false;
        }

        if (this.state.currentViewIndex !== nextState.currentViewIndex) {
            return true;
        }

        if (this.state.selectedEncounter) {
            return false;
        }

        return true;
    }});

    Object.defineProperty(DamageMeter.prototype,"componentWillReceiveProps",{writable:true,configurable:true,value:function(nextProps) {"use strict";
        // save this encounter data
        if (this.props.parseData.Encounter.title === 'Encounter' &&
            nextProps.parseData.Encounter.title !== 'Encounter') {
            EncountersArray.unshift({
                Encounter: nextProps.parseData.Encounter,
                Combatant: nextProps.parseData.Combatant
            });

            // Only keep the last 10 fights
            if (EncountersArray.length > 10) {
                EncountersArray.pop();
            }
        }
    }});

    Object.defineProperty(DamageMeter.prototype,"handleCombatRowClick",{writable:true,configurable:true,value:function(e) {"use strict";
    }});

    Object.defineProperty(DamageMeter.prototype,"handleClick",{writable:true,configurable:true,value:function(e) {"use strict";
    }});

    Object.defineProperty(DamageMeter.prototype,"handleViewChange",{writable:true,configurable:true,value:function(e) {"use strict";
        var index = this.state.currentViewIndex;

        if (index > this.props.chartViews.length-2) {
            index = 0;
        }
        else {
            index++;
        }

        this.setState({
            currentViewIndex: index
        });

    }});

    Object.defineProperty(DamageMeter.prototype,"handleSelectEncounter",{writable:true,configurable:true,value:function(index, e) {"use strict";
        if (index >= 0) {
            this.setState({
                selectedEncounter: EncountersArray[index]
            });
        }
        else {
            this.setState({
                selectedEncounter: null
            });
        }
        this.render();
        console.log('handle select', index);
    }});

    Object.defineProperty(DamageMeter.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
        var data = this.props.parseData.Combatant;
        var encounterData = this.props.parseData.Encounter;

        if (this.state.selectedEncounter) {
            data = this.state.selectedEncounter.Combatant;
            encounterData = this.state.selectedEncounter.Encounter;
        }
        else {
            // Healing
            // need to resort data if currentView is not damage
            if (this.state.currentViewIndex === 1) {
                data = _.sortBy(_.filter(data, function(d)  {
                    return parseInt(d.healed, 10) > 0;
                }), function(d)  {
                    if (this.state.currentViewIndex === 1) {
                        return -parseInt(d.healed, 10);
                    }
                }.bind(this));
            }
            // Tanking
            else if (this.state.currentViewIndex === 2) {
                data = _.sortBy(_.filter(data, function(d)  {
                    return parseInt(d.damagetaken, 10) > 0;
                }), function(d)  {
                    if (this.state.currentViewIndex === 2) {
                        return -parseInt(d.damagetaken, 10);
                    }
                }.bind(this));
            }
        }

        return (
            React.createElement("div", {
                onClick: this.handleClick, 
                className: 'damage-meter' + (!this.props.parseData.isActive ? ' inactive' : '') + (!this.props.noJobColors ? ' show-job-colors' : '')}, 
                React.createElement(Header, {
                    encounter: encounterData, 
                    onViewChange: this.handleViewChange.bind(this), 
                    onSelectEncounter: this.handleSelectEncounter.bind(this), 
                    currentView: this.props.chartViews[this.state.currentViewIndex]}
                    ), 
                React.createElement(Combatants, {
                    currentView: this.props.chartViews[this.state.currentViewIndex], 
                    onClick: this.handleCombatRowClick, 
                    data: data, 
                    encounterDamage: encounterData.damage})
            )
        );
    }});


DamageMeter.defaultProps = {
    chartViews: [
        '输出伤害',
        '输出治疗',
        '承受伤害'
    ],
    parseData: {},
    noJobColors: false
};
