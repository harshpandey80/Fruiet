module.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("vscode")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DebugSession=t.ErrorDestination=t.InvalidatedEvent=t.ProgressEndEvent=t.ProgressUpdateEvent=t.ProgressStartEvent=t.CapabilitiesEvent=t.LoadedSourceEvent=t.ModuleEvent=t.BreakpointEvent=t.ThreadEvent=t.OutputEvent=t.TerminatedEvent=t.InitializedEvent=t.ContinuedEvent=t.StoppedEvent=t.CompletionItem=t.Module=t.Breakpoint=t.Variable=t.Thread=t.StackFrame=t.Scope=t.Source=void 0;const s=n(10),o=n(2),r=n(12),i=n(14);t.Source=class{constructor(e,t,n=0,s,o){this.name=e,this.path=t,this.sourceReference=n,s&&(this.origin=s),o&&(this.adapterData=o)}};t.Scope=class{constructor(e,t,n=!1){this.name=e,this.variablesReference=t,this.expensive=n}};t.StackFrame=class{constructor(e,t,n,s=0,o=0){this.id=e,this.source=n,this.line=s,this.column=o,this.name=t}};t.Thread=class{constructor(e,t){this.id=e,this.name=t||"Thread #"+e}};t.Variable=class{constructor(e,t,n=0,s,o){this.name=e,this.value=t,this.variablesReference=n,"number"==typeof o&&(this.namedVariables=o),"number"==typeof s&&(this.indexedVariables=s)}};t.Breakpoint=class{constructor(e,t,n,s){this.verified=e;const o=this;"number"==typeof t&&(o.line=t),"number"==typeof n&&(o.column=n),s&&(o.source=s)}};t.Module=class{constructor(e,t){this.id=e,this.name=t}};t.CompletionItem=class{constructor(e,t,n=0){this.label=e,this.start=t,this.length=n}};class a extends o.Event{constructor(e,t,n){super("stopped"),this.body={reason:e},"number"==typeof t&&(this.body.threadId=t),"string"==typeof n&&(this.body.text=n)}}t.StoppedEvent=a;class u extends o.Event{constructor(e,t){super("continued"),this.body={threadId:e},"boolean"==typeof t&&(this.body.allThreadsContinued=t)}}t.ContinuedEvent=u;class c extends o.Event{constructor(){super("initialized")}}t.InitializedEvent=c;class d extends o.Event{constructor(e){if(super("terminated"),"boolean"==typeof e||e){this.body={restart:e}}}}t.TerminatedEvent=d;class p extends o.Event{constructor(e,t="console",n){super("output"),this.body={category:t,output:e},void 0!==n&&(this.body.data=n)}}t.OutputEvent=p;class h extends o.Event{constructor(e,t){super("thread"),this.body={reason:e,threadId:t}}}t.ThreadEvent=h;class l extends o.Event{constructor(e,t){super("breakpoint"),this.body={reason:e,breakpoint:t}}}t.BreakpointEvent=l;class g extends o.Event{constructor(e,t){super("module"),this.body={reason:e,module:t}}}t.ModuleEvent=g;class m extends o.Event{constructor(e,t){super("loadedSource"),this.body={reason:e,source:t}}}t.LoadedSourceEvent=m;class f extends o.Event{constructor(e){super("capabilities"),this.body={capabilities:e}}}t.CapabilitiesEvent=f;class b extends o.Event{constructor(e,t,n){super("progressStart"),this.body={progressId:e,title:t},"string"==typeof n&&(this.body.message=n)}}t.ProgressStartEvent=b;class v extends o.Event{constructor(e,t){super("progressUpdate"),this.body={progressId:e},"string"==typeof t&&(this.body.message=t)}}t.ProgressUpdateEvent=v;class y extends o.Event{constructor(e,t){super("progressEnd"),this.body={progressId:e},"string"==typeof t&&(this.body.message=t)}}t.ProgressEndEvent=y;class R extends o.Event{constructor(e,t,n){super("invalidated"),this.body={},e&&(this.body.areas=e),t&&(this.body.threadId=t),n&&(this.body.stackFrameId=n)}}var E;t.InvalidatedEvent=R,function(e){e[e.User=1]="User",e[e.Telemetry=2]="Telemetry"}(E=t.ErrorDestination||(t.ErrorDestination={}));class _ extends s.ProtocolServer{constructor(e,t){super();const n="boolean"==typeof e&&e;this._debuggerLinesStartAt1=n,this._debuggerColumnsStartAt1=n,this._debuggerPathsAreURIs=!1,this._clientLinesStartAt1=!0,this._clientColumnsStartAt1=!0,this._clientPathsAreURIs=!1,this._isServer="boolean"==typeof t&&t,this.on("close",()=>{this.shutdown()}),this.on("error",e=>{this.shutdown()})}setDebuggerPathFormat(e){this._debuggerPathsAreURIs="path"!==e}setDebuggerLinesStartAt1(e){this._debuggerLinesStartAt1=e}setDebuggerColumnsStartAt1(e){this._debuggerColumnsStartAt1=e}setRunAsServer(e){this._isServer=e}static run(e){r.runDebugAdapter(e)}shutdown(){this._isServer||this._isRunningInline()||setTimeout(()=>{process.exit(0)},100)}sendErrorResponse(e,t,n,s,o=E.User){let r;"number"==typeof t?(r={id:t,format:n},s&&(r.variables=s),o&E.User&&(r.showUser=!0),o&E.Telemetry&&(r.sendTelemetry=!0)):r=t,e.success=!1,e.message=_.formatPII(r.format,!0,r.variables),e.body||(e.body={}),e.body.error=r,this.sendResponse(e)}runInTerminalRequest(e,t,n){this.sendRequest("runInTerminal",e,t,n)}dispatchRequest(e){const t=new o.Response(e);try{if("initialize"===e.command){var n=e.arguments;if("boolean"==typeof n.linesStartAt1&&(this._clientLinesStartAt1=n.linesStartAt1),"boolean"==typeof n.columnsStartAt1&&(this._clientColumnsStartAt1=n.columnsStartAt1),"path"!==n.pathFormat)this.sendErrorResponse(t,2018,"debug adapter only supports native paths",null,E.Telemetry);else{const e=t;e.body={},this.initializeRequest(e,n)}}else"launch"===e.command?this.launchRequest(t,e.arguments,e):"attach"===e.command?this.attachRequest(t,e.arguments,e):"disconnect"===e.command?this.disconnectRequest(t,e.arguments,e):"terminate"===e.command?this.terminateRequest(t,e.arguments,e):"restart"===e.command?this.restartRequest(t,e.arguments,e):"setBreakpoints"===e.command?this.setBreakPointsRequest(t,e.arguments,e):"setFunctionBreakpoints"===e.command?this.setFunctionBreakPointsRequest(t,e.arguments,e):"setExceptionBreakpoints"===e.command?this.setExceptionBreakPointsRequest(t,e.arguments,e):"configurationDone"===e.command?this.configurationDoneRequest(t,e.arguments,e):"continue"===e.command?this.continueRequest(t,e.arguments,e):"next"===e.command?this.nextRequest(t,e.arguments,e):"stepIn"===e.command?this.stepInRequest(t,e.arguments,e):"stepOut"===e.command?this.stepOutRequest(t,e.arguments,e):"stepBack"===e.command?this.stepBackRequest(t,e.arguments,e):"reverseContinue"===e.command?this.reverseContinueRequest(t,e.arguments,e):"restartFrame"===e.command?this.restartFrameRequest(t,e.arguments,e):"goto"===e.command?this.gotoRequest(t,e.arguments,e):"pause"===e.command?this.pauseRequest(t,e.arguments,e):"stackTrace"===e.command?this.stackTraceRequest(t,e.arguments,e):"scopes"===e.command?this.scopesRequest(t,e.arguments,e):"variables"===e.command?this.variablesRequest(t,e.arguments,e):"setVariable"===e.command?this.setVariableRequest(t,e.arguments,e):"setExpression"===e.command?this.setExpressionRequest(t,e.arguments,e):"source"===e.command?this.sourceRequest(t,e.arguments,e):"threads"===e.command?this.threadsRequest(t,e):"terminateThreads"===e.command?this.terminateThreadsRequest(t,e.arguments,e):"evaluate"===e.command?this.evaluateRequest(t,e.arguments,e):"stepInTargets"===e.command?this.stepInTargetsRequest(t,e.arguments,e):"gotoTargets"===e.command?this.gotoTargetsRequest(t,e.arguments,e):"completions"===e.command?this.completionsRequest(t,e.arguments,e):"exceptionInfo"===e.command?this.exceptionInfoRequest(t,e.arguments,e):"loadedSources"===e.command?this.loadedSourcesRequest(t,e.arguments,e):"dataBreakpointInfo"===e.command?this.dataBreakpointInfoRequest(t,e.arguments,e):"setDataBreakpoints"===e.command?this.setDataBreakpointsRequest(t,e.arguments,e):"readMemory"===e.command?this.readMemoryRequest(t,e.arguments,e):"disassemble"===e.command?this.disassembleRequest(t,e.arguments,e):"cancel"===e.command?this.cancelRequest(t,e.arguments,e):"breakpointLocations"===e.command?this.breakpointLocationsRequest(t,e.arguments,e):"setInstructionBreakpoints"===e.command?this.setInstructionBreakpointsRequest(t,e.arguments,e):this.customRequest(e.command,t,e.arguments,e)}catch(e){this.sendErrorResponse(t,1104,"{_stack}",{_exception:e.message,_stack:e.stack},E.Telemetry)}}initializeRequest(e,t){e.body.supportsConditionalBreakpoints=!1,e.body.supportsHitConditionalBreakpoints=!1,e.body.supportsFunctionBreakpoints=!1,e.body.supportsConfigurationDoneRequest=!0,e.body.supportsEvaluateForHovers=!1,e.body.supportsStepBack=!1,e.body.supportsSetVariable=!1,e.body.supportsRestartFrame=!1,e.body.supportsStepInTargetsRequest=!1,e.body.supportsGotoTargetsRequest=!1,e.body.supportsCompletionsRequest=!1,e.body.supportsRestartRequest=!1,e.body.supportsExceptionOptions=!1,e.body.supportsValueFormattingOptions=!1,e.body.supportsExceptionInfoRequest=!1,e.body.supportTerminateDebuggee=!1,e.body.supportsDelayedStackTraceLoading=!1,e.body.supportsLoadedSourcesRequest=!1,e.body.supportsLogPoints=!1,e.body.supportsTerminateThreadsRequest=!1,e.body.supportsSetExpression=!1,e.body.supportsTerminateRequest=!1,e.body.supportsDataBreakpoints=!1,e.body.supportsReadMemoryRequest=!1,e.body.supportsDisassembleRequest=!1,e.body.supportsCancelRequest=!1,e.body.supportsBreakpointLocationsRequest=!1,e.body.supportsClipboardContext=!1,e.body.supportsSteppingGranularity=!1,e.body.supportsInstructionBreakpoints=!1,e.body.supportsExceptionFilterOptions=!1,this.sendResponse(e)}disconnectRequest(e,t,n){this.sendResponse(e),this.shutdown()}launchRequest(e,t,n){this.sendResponse(e)}attachRequest(e,t,n){this.sendResponse(e)}terminateRequest(e,t,n){this.sendResponse(e)}restartRequest(e,t,n){this.sendResponse(e)}setBreakPointsRequest(e,t,n){this.sendResponse(e)}setFunctionBreakPointsRequest(e,t,n){this.sendResponse(e)}setExceptionBreakPointsRequest(e,t,n){this.sendResponse(e)}configurationDoneRequest(e,t,n){this.sendResponse(e)}continueRequest(e,t,n){this.sendResponse(e)}nextRequest(e,t,n){this.sendResponse(e)}stepInRequest(e,t,n){this.sendResponse(e)}stepOutRequest(e,t,n){this.sendResponse(e)}stepBackRequest(e,t,n){this.sendResponse(e)}reverseContinueRequest(e,t,n){this.sendResponse(e)}restartFrameRequest(e,t,n){this.sendResponse(e)}gotoRequest(e,t,n){this.sendResponse(e)}pauseRequest(e,t,n){this.sendResponse(e)}sourceRequest(e,t,n){this.sendResponse(e)}threadsRequest(e,t){this.sendResponse(e)}terminateThreadsRequest(e,t,n){this.sendResponse(e)}stackTraceRequest(e,t,n){this.sendResponse(e)}scopesRequest(e,t,n){this.sendResponse(e)}variablesRequest(e,t,n){this.sendResponse(e)}setVariableRequest(e,t,n){this.sendResponse(e)}setExpressionRequest(e,t,n){this.sendResponse(e)}evaluateRequest(e,t,n){this.sendResponse(e)}stepInTargetsRequest(e,t,n){this.sendResponse(e)}gotoTargetsRequest(e,t,n){this.sendResponse(e)}completionsRequest(e,t,n){this.sendResponse(e)}exceptionInfoRequest(e,t,n){this.sendResponse(e)}loadedSourcesRequest(e,t,n){this.sendResponse(e)}dataBreakpointInfoRequest(e,t,n){this.sendResponse(e)}setDataBreakpointsRequest(e,t,n){this.sendResponse(e)}readMemoryRequest(e,t,n){this.sendResponse(e)}disassembleRequest(e,t,n){this.sendResponse(e)}cancelRequest(e,t,n){this.sendResponse(e)}breakpointLocationsRequest(e,t,n){this.sendResponse(e)}setInstructionBreakpointsRequest(e,t,n){this.sendResponse(e)}customRequest(e,t,n,s){this.sendErrorResponse(t,1014,"unrecognized request",null,E.Telemetry)}convertClientLineToDebugger(e){return this._debuggerLinesStartAt1?this._clientLinesStartAt1?e:e+1:this._clientLinesStartAt1?e-1:e}convertDebuggerLineToClient(e){return this._debuggerLinesStartAt1?this._clientLinesStartAt1?e:e-1:this._clientLinesStartAt1?e+1:e}convertClientColumnToDebugger(e){return this._debuggerColumnsStartAt1?this._clientColumnsStartAt1?e:e+1:this._clientColumnsStartAt1?e-1:e}convertDebuggerColumnToClient(e){return this._debuggerColumnsStartAt1?this._clientColumnsStartAt1?e:e-1:this._clientColumnsStartAt1?e+1:e}convertClientPathToDebugger(e){return this._clientPathsAreURIs!==this._debuggerPathsAreURIs?this._clientPathsAreURIs?_.uri2path(e):_.path2uri(e):e}convertDebuggerPathToClient(e){return this._debuggerPathsAreURIs!==this._clientPathsAreURIs?this._debuggerPathsAreURIs?_.uri2path(e):_.path2uri(e):e}static path2uri(e){"win32"===process.platform&&(/^[A-Z]:/.test(e)&&(e=e[0].toLowerCase()+e.substr(1)),e=e.replace(/\\/g,"/")),e=encodeURI(e);let t=new i.URL("file:");return t.pathname=e,t.toString()}static uri2path(e){let t=new i.URL(e),n=decodeURIComponent(t.pathname);return"win32"===process.platform&&(/^\/[a-zA-Z]:/.test(n)&&(n=n[1].toLowerCase()+n.substr(2)),n=n.replace(/\//g,"\\")),n}static formatPII(e,t,n){return e.replace(_._formatPIIRegexp,(function(e,s){return t&&s.length>0&&"_"!==s[0]?e:n[s]&&n.hasOwnProperty(s)?n[s]:e}))}}t.DebugSession=_,_._formatPIIRegexp=/{([^}]+)}/g},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Event=t.Response=t.Message=void 0;class s{constructor(e){this.seq=0,this.type=e}}t.Message=s;t.Response=class extends s{constructor(e,t){super("response"),this.request_seq=e.seq,this.command=e.command,t?(this.success=!1,this.message=t):this.success=!0}};t.Event=class extends s{constructor(e,t){super("event"),this.event=e,t&&(this.body=t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trimLastNewline=t.LogOutputEvent=t.logger=t.Logger=t.LogLevel=void 0;const s=n(16),o=n(1);var r;!function(e){e[e.Verbose=0]="Verbose",e[e.Log=1]="Log",e[e.Warn=2]="Warn",e[e.Error=3]="Error",e[e.Stop=4]="Stop"}(r=t.LogLevel||(t.LogLevel={}));class i{constructor(){this._pendingLogQ=[]}log(e,t=r.Log){e+="\n",this._write(e,t)}verbose(e){this.log(e,r.Verbose)}warn(e){this.log(e,r.Warn)}error(e){this.log(e,r.Error)}dispose(){if(this._currentLogger){const e=this._currentLogger.dispose();return this._currentLogger=null,e}return Promise.resolve()}_write(e,t=r.Log){e+="",this._pendingLogQ?this._pendingLogQ.push({msg:e,level:t}):this._currentLogger&&this._currentLogger.log(e,t)}setup(e,t,n=!0){const s="string"==typeof t?t:t&&this._logFilePathFromInit;if(this._currentLogger){const t={consoleMinLogLevel:e,logFilePath:s,prependTimestamp:n};this._currentLogger.setup(t).then(()=>{if(this._pendingLogQ){const e=this._pendingLogQ;this._pendingLogQ=null,e.forEach(e=>this._write(e.msg,e.level))}})}}init(e,t,n){this._pendingLogQ=this._pendingLogQ||[],this._currentLogger=new s.InternalLogger(e,n),this._logFilePathFromInit=t}}t.Logger=i,t.logger=new i;class a extends o.OutputEvent{constructor(e,t){super(e,t===r.Error?"stderr":t===r.Warn?"console":"stdout")}}t.LogOutputEvent=a,t.trimLastNewline=function(e){return e.replace(/(\n|\r\n)$/,"")}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function a(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getPythonPath=t.activatePythonCppDebug=void 0;const o=n(0),r=n(8),i=n(19);t.activatePythonCppDebug=function(e,t){e.subscriptions.push(o.commands.registerCommand("extension.pythonCpp-debug.runEditorContents",e=>{let t=e;!t&&o.window.activeTextEditor&&(t=o.window.activeTextEditor.document.uri),t&&o.debug.startDebugging(void 0,{type:"pythoncpp",name:"PythonCpp Debug",request:"launch",pythonConfig:"default",cppConfig:i.platform().startsWith("win")?"default (win) Attach":"default (gdb) Attach"},{noDebug:!0})}),o.commands.registerCommand("extension.pythonCpp-debug.debugEditorContents",e=>{let t=e;!t&&o.window.activeTextEditor&&(t=o.window.activeTextEditor.document.uri),t&&o.debug.startDebugging(void 0,{type:"pythoncpp",name:"PythonCpp Debug",request:"launch",pythonConfig:"default",cppConfig:i.platform().startsWith("win")?"default (win) Attach":"default (gdb) Attach"})}));const n=new a;e.subscriptions.push(o.debug.registerDebugConfigurationProvider("pythoncpp",n)),t||(t=new c),e.subscriptions.push(o.debug.registerDebugAdapterDescriptorFactory("pythoncpp",t)),"dispose"in t&&e.subscriptions.push(t)};class a{resolveDebugConfiguration(e,t,n){if(!t.type&&!t.request&&!t.name){let e="Please make sure you have a launch.json file with a configuration of type 'pythoncpp' to use this debugger";return o.window.showErrorMessage(e).then(e=>{})}if(!e){let e="Working folder not found, open a folder and try again";return o.window.showErrorMessage(e).then(e=>{})}if(!t.entirePythonConfig&&(t.pythonConfig&&("custom"===t.pythonConfig||"manual"===t.pythonConfig)||!t.pythonConfig)&&!t.pythonLaunchName){let e="Make sure to either set 'pythonLaunchName' to the name of your python configuration or set 'pythonConfig: default'";return o.window.showErrorMessage(e).then(e=>{})}if(!t.entireCppConfig&&(t.cppConfig&&("custom"===t.cppConfig||"manual"===t.cppConfig)||!t.cppConfig)&&!t.cppAttachName){let e="Make sure to either set 'cppAttachName' to the name of your C++ configuration or set 'cppConfig' to the default configuration you wish to use";return o.window.showErrorMessage(e).then(e=>{})}return t}provideDebugConfigurations(e,t){return s(this,void 0,void 0,(function*(){const e={name:"(Windows) Attach",type:"cppvsdbg",request:"attach",processId:""},t=[{label:"Python C++ Debugger",configuration:e,description:"Default",type:"Default"},{label:"Python C++ Debugger",configuration:e,description:"Custom: Windows",type:"(Windows)"},{label:"Python C++ Debugger",configuration:{name:"(gdb) Attach",type:"cppdbg",request:"attach",program:yield u(null),processId:"",MIMode:"gdb",miDebuggerPath:"/path/to/gdb or remove this attribute for the path to be found automatically",setupCommands:[{description:"Enable pretty-printing for gdb",text:"-enable-pretty-printing",ignoreFailures:!0}]},description:"Custom: GDB",type:"(gdb)"}],n=yield o.window.showQuickPick(t,{placeHolder:"Select a configuration"});if(!n||"Default"===n.type){return[{name:"Python C++ Debugger",type:"pythoncpp",request:"launch",pythonConfig:"default",cppConfig:i.platform().startsWith("win")?"default (win) Attach":"default (gdb) Attach"}]}return[{name:"Python C++ Debugger",type:"pythoncpp",request:"launch",pythonLaunchName:"Python: Current File",cppAttachName:n.type+" Attach"},n.configuration,{name:"Python: Current File",type:"python",request:"launch",program:"${file}",console:"integratedTerminal"}]}))}}function u(e){var t,n;return s(this,void 0,void 0,(function*(){try{let s=o.extensions.getExtension("ms-python.python");if(!s)return"python";if(null===(n=null===(t=s.packageJSON)||void 0===t?void 0:t.featureFlags)||void 0===n?void 0:n.usingNewInterpreterStorage){s.isActive||(yield s.activate());const t=s.exports.settings.getExecutionDetails?s.exports.settings.getExecutionDetails(null==e?void 0:e.uri).execCommand:s.exports.settings.getExecutionCommand(null==e?void 0:e.uri);return t?t.join(" "):"python"}{let t;if(t=e?o.workspace.getConfiguration("python",e.uri).get("pythonPath"):o.workspace.getConfiguration("python").get("pythonPath"),!t)return"python"}}catch(e){return"python"}return"python"}))}t.getPythonPath=u;class c{createDebugAdapterDescriptor(e){return new o.DebugAdapterInlineImplementation(new r.PythonCppDebugSession)}}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function a(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const o=n(0),r=n(4);let i,a;t.activate=function(e){return s(this,void 0,void 0,(function*(){i=o.extensions.getExtension("ms-python.python"),a=o.extensions.getExtension("ms-vscode.cpptools"),i?a?(i.isActive||(yield i.activate()),a.isActive||(yield a.activate()),r.activatePythonCppDebug(e)):o.window.showErrorMessage("You must have the official C++ extension to use this debugger!"):o.window.showErrorMessage("You must have the official Python extension to use this debugger!")}))},t.deactivate=function(){}},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function a(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.PythonCppDebugSession=void 0;const o=n(9),r=n(0),i=n(4);class a extends o.LoggingDebugSession{constructor(){super();let e=r.workspace.workspaceFolders;if(!e){let e="Working folder not found, open a folder and try again";return r.window.showErrorMessage(e),void this.sendEvent(new o.TerminatedEvent)}this.folder=e[0]}launchRequest(e,t){return s(this,void 0,void 0,(function*(){if(this.sendEvent(new o.TerminatedEvent),!this.folder){let e="Working folder not found, open a folder and try again";return void r.window.showErrorMessage(e)}let n=yield this.checkConfig(t,this.folder);if(!n)return;let s=(t=n).pythonLaunch,i=t.cppAttach,a=!!s.stopOnEntry;s.stopOnEntry=!0,yield r.debug.startDebugging(this.folder,s,void 0).then(e=>{if(!r.debug.activeDebugSession||!e)return;const n=r.debug.activeDebugSession;n.customRequest("pydevdSystemInfo").then(e=>{if(!e.process.pid){let e="The python debugger couldn't send its processId,\t\t\t\t\t\t\t\t\t\t\t \t\t\t\tmake sure to enter an Issue on the official Python Cp++ Debug Github about this issue!";return r.window.showErrorMessage(e).then(e=>{})}i.processId=e.process.pid,i.pid=e.process.pid,r.debug.startDebugging(this.folder,i,void 0).then(e=>{e?setTimeout(e=>{a||n.customRequest("continue")},t.optimizedLaunch?0:500):r.debug.stopDebugging(n)})})}),this.sendResponse(e)}))}checkConfig(e,t){return s(this,void 0,void 0,(function*(){let n,s;if(e.entirePythonConfig)n=e.entirePythonConfig;else if(e.pythonConfig&&"custom"!==e.pythonConfig&&"manual"!==e.pythonConfig)"default"===e.pythonConfig&&(n={name:"Python: Current File",type:"python",request:"launch",program:"${file}",console:"integratedTerminal"});else{if(!e.pythonLaunchName){let e="Please make sure to define 'pythonLaunchName' for pythonCpp in your launch.json file or set 'pythonConfig' to default";return r.window.showErrorMessage(e).then(e=>{})}if(n=u(e.pythonLaunchName,t),!n){let t="Please make sure you have a configurations with the names '"+e.pythonLaunchName+"' in your launch.json file.";return void r.window.showErrorMessage(t)}}if(e.entireCppConfig)s=e.entireCppConfig;else if(e.cppConfig&&"custom"!==e.cppConfig&&"manual"!==e.cppConfig)"default (win) Attach"===e.cppConfig?s={name:"(Windows) Attach",type:"cppvsdbg",request:"attach",processId:""}:"default (gdb) Attach"===e.cppConfig&&(s={name:"(gdb) Attach",type:"cppdbg",request:"attach",program:yield i.getPythonPath(null),processId:"",MIMode:"gdb",setupCommands:[{description:"Enable pretty-printing for gdb",text:"-enable-pretty-printing",ignoreFailures:!0}]});else{if(!e.cppAttachName){let e="Make sure to either define 'cppAttachName' for pythonCpp in your launch.json file or use the default configurations with the attribute 'cppConfig'";return r.window.showErrorMessage(e).then(e=>{})}if(s=u(e.cppAttachName,t),!s){let t="Make sure you have a configurations with the names '"+e.cppAttachName+"' in your launch.json file.";return void r.window.showErrorMessage(t)}s.program||"cppdbg"!==s.type||(s.program=yield i.getPythonPath(null)),s.processId=""}return e.pythonLaunch=n,e.cppAttach=s,e}))}}function u(e,t){const n=r.workspace.getConfiguration("launch",t.uri).get("configurations");if(n)return function(e,t){let n=0;for(;t[n];){if(t[n].name===e)return t[n];n++}return}(e,n);{let e="Unexpected error with the launch.json file";r.window.showErrorMessage(e)}}t.PythonCppDebugSession=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Handles=t.Response=t.Event=t.ErrorDestination=t.CompletionItem=t.Module=t.Source=t.Breakpoint=t.Variable=t.Scope=t.StackFrame=t.Thread=t.InvalidatedEvent=t.ProgressEndEvent=t.ProgressUpdateEvent=t.ProgressStartEvent=t.CapabilitiesEvent=t.LoadedSourceEvent=t.ModuleEvent=t.BreakpointEvent=t.ThreadEvent=t.OutputEvent=t.ContinuedEvent=t.StoppedEvent=t.TerminatedEvent=t.InitializedEvent=t.logger=t.Logger=t.LoggingDebugSession=t.DebugSession=void 0;const s=n(1);Object.defineProperty(t,"DebugSession",{enumerable:!0,get:function(){return s.DebugSession}}),Object.defineProperty(t,"InitializedEvent",{enumerable:!0,get:function(){return s.InitializedEvent}}),Object.defineProperty(t,"TerminatedEvent",{enumerable:!0,get:function(){return s.TerminatedEvent}}),Object.defineProperty(t,"StoppedEvent",{enumerable:!0,get:function(){return s.StoppedEvent}}),Object.defineProperty(t,"ContinuedEvent",{enumerable:!0,get:function(){return s.ContinuedEvent}}),Object.defineProperty(t,"OutputEvent",{enumerable:!0,get:function(){return s.OutputEvent}}),Object.defineProperty(t,"ThreadEvent",{enumerable:!0,get:function(){return s.ThreadEvent}}),Object.defineProperty(t,"BreakpointEvent",{enumerable:!0,get:function(){return s.BreakpointEvent}}),Object.defineProperty(t,"ModuleEvent",{enumerable:!0,get:function(){return s.ModuleEvent}}),Object.defineProperty(t,"LoadedSourceEvent",{enumerable:!0,get:function(){return s.LoadedSourceEvent}}),Object.defineProperty(t,"CapabilitiesEvent",{enumerable:!0,get:function(){return s.CapabilitiesEvent}}),Object.defineProperty(t,"ProgressStartEvent",{enumerable:!0,get:function(){return s.ProgressStartEvent}}),Object.defineProperty(t,"ProgressUpdateEvent",{enumerable:!0,get:function(){return s.ProgressUpdateEvent}}),Object.defineProperty(t,"ProgressEndEvent",{enumerable:!0,get:function(){return s.ProgressEndEvent}}),Object.defineProperty(t,"InvalidatedEvent",{enumerable:!0,get:function(){return s.InvalidatedEvent}}),Object.defineProperty(t,"Thread",{enumerable:!0,get:function(){return s.Thread}}),Object.defineProperty(t,"StackFrame",{enumerable:!0,get:function(){return s.StackFrame}}),Object.defineProperty(t,"Scope",{enumerable:!0,get:function(){return s.Scope}}),Object.defineProperty(t,"Variable",{enumerable:!0,get:function(){return s.Variable}}),Object.defineProperty(t,"Breakpoint",{enumerable:!0,get:function(){return s.Breakpoint}}),Object.defineProperty(t,"Source",{enumerable:!0,get:function(){return s.Source}}),Object.defineProperty(t,"Module",{enumerable:!0,get:function(){return s.Module}}),Object.defineProperty(t,"CompletionItem",{enumerable:!0,get:function(){return s.CompletionItem}}),Object.defineProperty(t,"ErrorDestination",{enumerable:!0,get:function(){return s.ErrorDestination}});const o=n(15);Object.defineProperty(t,"LoggingDebugSession",{enumerable:!0,get:function(){return o.LoggingDebugSession}});const r=n(3);t.Logger=r;const i=n(2);Object.defineProperty(t,"Event",{enumerable:!0,get:function(){return i.Event}}),Object.defineProperty(t,"Response",{enumerable:!0,get:function(){return i.Response}});const a=n(18);Object.defineProperty(t,"Handles",{enumerable:!0,get:function(){return a.Handles}});const u=r.logger;t.logger=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProtocolServer=void 0;const s=n(11),o=n(2);class r{get event(){return this._event||(this._event=(e,t)=>{let n;return this._listener=e,this._this=t,n={dispose:()=>{this._listener=void 0,this._this=void 0}},n}),this._event}fire(e){if(this._listener)try{this._listener.call(this._this,e)}catch(e){}}hasListener(){return!!this._listener}dispose(){this._listener=void 0,this._this=void 0}}class i extends s.EventEmitter{constructor(){super(),this._sendMessage=new r,this._pendingRequests=new Map,this.onDidSendMessage=this._sendMessage.event}dispose(){}handleMessage(e){if("request"===e.type)this.dispatchRequest(e);else if("response"===e.type){const t=e,n=this._pendingRequests.get(t.request_seq);n&&(this._pendingRequests.delete(t.request_seq),n(t))}}_isRunningInline(){return this._sendMessage&&this._sendMessage.hasListener()}start(e,t){this._sequence=1,this._writableStream=t,this._rawData=new Buffer(0),e.on("data",e=>this._handleData(e)),e.on("close",()=>{this._emitEvent(new o.Event("close"))}),e.on("error",e=>{this._emitEvent(new o.Event("error","inStream error: "+(e&&e.message)))}),t.on("error",e=>{this._emitEvent(new o.Event("error","outStream error: "+(e&&e.message)))}),e.resume()}stop(){this._writableStream&&this._writableStream.end()}sendEvent(e){this._send("event",e)}sendResponse(e){e.seq>0?console.error("attempt to send more than one response for command "+e.command):this._send("response",e)}sendRequest(e,t,n,s){const r={command:e};if(t&&Object.keys(t).length>0&&(r.arguments=t),this._send("request",r),s){this._pendingRequests.set(r.seq,s);const e=setTimeout(()=>{clearTimeout(e);const t=this._pendingRequests.get(r.seq);t&&(this._pendingRequests.delete(r.seq),t(new o.Response(r,"timeout")))},n)}}dispatchRequest(e){}_emitEvent(e){this.emit(e.event,e)}_send(e,t){if(t.type=e,t.seq=this._sequence++,this._writableStream){const e=JSON.stringify(t);this._writableStream.write(`Content-Length: ${Buffer.byteLength(e,"utf8")}\r\n\r\n${e}`,"utf8")}this._sendMessage.fire(t)}_handleData(e){for(this._rawData=Buffer.concat([this._rawData,e]);;){if(this._contentLength>=0){if(this._rawData.length>=this._contentLength){const e=this._rawData.toString("utf8",0,this._contentLength);if(this._rawData=this._rawData.slice(this._contentLength),this._contentLength=-1,e.length>0)try{let t=JSON.parse(e);this.handleMessage(t)}catch(e){this._emitEvent(new o.Event("error","Error handling data: "+(e&&e.message)))}continue}}else{const e=this._rawData.indexOf(i.TWO_CRLF);if(-1!==e){const t=this._rawData.toString("utf8",0,e).split("\r\n");for(let e=0;e<t.length;e++){const n=t[e].split(/: +/);"Content-Length"==n[0]&&(this._contentLength=+n[1])}this._rawData=this._rawData.slice(e+i.TWO_CRLF.length);continue}}break}}}t.ProtocolServer=i,i.TWO_CRLF="\r\n\r\n"},function(e,t){e.exports=require("events")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.runDebugAdapter=void 0;const s=n(13);t.runDebugAdapter=function(e){let t=0;if(process.argv.slice(2).forEach((function(e,n,s){const o=/^--server=(\d{4,5})$/.exec(e);o&&(t=parseInt(o[1],10))})),t>0)console.error("waiting for debug protocol on port "+t),s.createServer(t=>{console.error(">> accepted connection from client"),t.on("end",()=>{console.error(">> client connection closed\n")});const n=new e(!1,!0);n.setRunAsServer(!0),n.start(t,t)}).listen(t);else{const t=new e(!1);process.on("SIGTERM",()=>{t.shutdown()}),t.start(process.stdin,process.stdout)}}},function(e,t){e.exports=require("net")},function(e,t){e.exports=require("url")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoggingDebugSession=void 0;const s=n(3),o=s.logger,r=n(1);class i extends r.DebugSession{constructor(e,t,n){super(t,n),this.obsolete_logFilePath=e,this.on("error",e=>{o.error(e.body)})}start(e,t){super.start(e,t),o.init(e=>this.sendEvent(e),this.obsolete_logFilePath,this._isServer)}sendEvent(e){if(!(e instanceof s.LogOutputEvent)){let t=e;e instanceof r.OutputEvent&&e.body&&e.body.data&&e.body.data.doNotLogOutput&&(delete e.body.data.doNotLogOutput,t=Object.assign({},e),t.body=Object.assign(Object.assign({},e.body),{output:"<output not logged>"})),o.verbose("To client: "+JSON.stringify(t))}super.sendEvent(e)}sendRequest(e,t,n,s){o.verbose(`To client: ${JSON.stringify(e)}(${JSON.stringify(t)}), timeout: ${n}`),super.sendRequest(e,t,n,s)}sendResponse(e){o.verbose("To client: "+JSON.stringify(e)),super.sendResponse(e)}dispatchRequest(e){o.verbose(`From client: ${e.command}(${JSON.stringify(e.arguments)})`),super.dispatchRequest(e)}}t.LoggingDebugSession=i},function(e,t,n){"use strict";var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function i(e){try{u(s.next(e))}catch(e){r(e)}}function a(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.InternalLogger=void 0;const o=n(5),r=n(6),i=n(17);const a=n(3);function u(){let e=new Date;return c(2,String(e.getUTCHours()))+":"+c(2,String(e.getUTCMinutes()))+":"+c(2,String(e.getUTCSeconds()))+"."+c(3,String(e.getUTCMilliseconds()))+" UTC"}function c(e,t){return t.length>=e?t:String("0".repeat(e)+t).slice(-e)}t.InternalLogger=class{constructor(e,t){this.beforeExitCallback=()=>this.dispose(),this._logCallback=e,this._logToConsole=t,this._minLogLevel=a.LogLevel.Warn,this.disposeCallback=(e,t)=>{this.dispose(),t=t||2,t+=128,process.exit(t)}}setup(e){return s(this,void 0,void 0,(function*(){if(this._minLogLevel=e.consoleMinLogLevel,this._prependTimestamp=e.prependTimestamp,e.logFilePath)if(r.isAbsolute(e.logFilePath)){const n=t=>this.sendLog(`Error creating log file at path: ${e.logFilePath}. Error: ${t.toString()}\n`,a.LogLevel.Error);try{yield(t=r.dirname(e.logFilePath),new Promise((e,n)=>{i(t,(t,s)=>{t?n(t):e(s)})})),this.log("Verbose logs are written to:\n",a.LogLevel.Warn),this.log(e.logFilePath+"\n",a.LogLevel.Warn),this._logFileStream=o.createWriteStream(e.logFilePath),this.logDateTime(),this.setupShutdownListeners(),this._logFileStream.on("error",e=>{n(e)})}catch(e){n(e)}}else this.log("logFilePath must be an absolute path: "+e.logFilePath,a.LogLevel.Error);var t}))}logDateTime(){let e=new Date;const t=e.getUTCFullYear()+"-"+(e.getUTCMonth()+1)+"-"+e.getUTCDate()+", "+u();this.log(t+"\n",a.LogLevel.Verbose,!1)}setupShutdownListeners(){process.addListener("beforeExit",this.beforeExitCallback),process.addListener("SIGTERM",this.disposeCallback),process.addListener("SIGINT",this.disposeCallback)}removeShutdownListeners(){process.removeListener("beforeExit",this.beforeExitCallback),process.removeListener("SIGTERM",this.disposeCallback),process.removeListener("SIGINT",this.disposeCallback)}dispose(){return new Promise(e=>{this.removeShutdownListeners(),this._logFileStream?(this._logFileStream.end(e),this._logFileStream=null):e()})}log(e,t,n=!0){if(this._minLogLevel!==a.LogLevel.Stop){if(t>=this._minLogLevel&&this.sendLog(e,t),this._logToConsole){const n=t===a.LogLevel.Error?console.error:t===a.LogLevel.Warn?console.warn:null;n&&n(a.trimLastNewline(e))}t===a.LogLevel.Error&&(e=`[${a.LogLevel[t]}] ${e}`),this._prependTimestamp&&n&&(e="["+u()+"] "+e),this._logFileStream&&this._logFileStream.write(e)}}sendLog(e,t){if(e.length>1500){const t=!!e.match(/(\n|\r\n)$/);e=e.substr(0,1500)+"[...]",t&&(e+="\n")}if(this._logCallback){const n=new a.LogOutputEvent(e,t);this._logCallback(n)}}}},function(e,t,n){var s=n(6),o=n(5),r=parseInt("0777",8);function i(e,t,n,a){"function"==typeof t?(n=t,t={}):t&&"object"==typeof t||(t={mode:t});var u=t.mode,c=t.fs||o;void 0===u&&(u=r),a||(a=null);var d=n||function(){};e=s.resolve(e),c.mkdir(e,u,(function(n){if(!n)return d(null,a=a||e);switch(n.code){case"ENOENT":if(s.dirname(e)===e)return d(n);i(s.dirname(e),t,(function(n,s){n?d(n,s):i(e,t,d,s)}));break;default:c.stat(e,(function(e,t){e||!t.isDirectory()?d(n,a):d(null,a)}))}}))}e.exports=i.mkdirp=i.mkdirP=i,i.sync=function e(t,n,i){n&&"object"==typeof n||(n={mode:n});var a=n.mode,u=n.fs||o;void 0===a&&(a=r),i||(i=null),t=s.resolve(t);try{u.mkdirSync(t,a),i=i||t}catch(o){switch(o.code){case"ENOENT":i=e(s.dirname(t),n,i),e(t,n,i);break;default:var c;try{c=u.statSync(t)}catch(e){throw o}if(!c.isDirectory())throw o}}return i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Handles=void 0;t.Handles=class{constructor(e){this.START_HANDLE=1e3,this._handleMap=new Map,this._nextHandle="number"==typeof e?e:this.START_HANDLE}reset(){this._nextHandle=this.START_HANDLE,this._handleMap=new Map}create(e){var t=this._nextHandle++;return this._handleMap.set(t,e),t}get(e,t){return this._handleMap.get(e)||t}}},function(e,t){e.exports=require("os")}]);
//# sourceMappingURL=extension.js.map