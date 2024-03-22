<template>
  <div>
    <h1>游 戏 指 令 说 明</h1>

    <el-card class="box-card">
      <div slot="header">
        <h1>指令</h1>
      </div>
      <h2>本页指令文件表格：<a :href="filepath" download="Commands.xlsx">点我下载</a></h2>
      <h2>游戏中有许多不同功能的指令，详情参见<a href="https://developer.valvesoftware.com/wiki/List_of_Half-Life_console_commands_and_variables" target="_blank">v社官方说明</a></h2>
      <div class="text item">
        现在介绍几个关键指令
      </div>
      <ul class="Code">
        <li>bind指令</li>
        bind [key] [command(s)] 为某个按键绑定一个指令或者一批指令,例如<br>
        bind z weapon_shotgun 在游戏中按下z键就可以切换到霰弹枪<br>
        bind m "say_team ^2Dropped ^3[^5%w^3] at ^8%l;drop" 发送当前武器信息，丢掉当前武器<br>
        <br>
        <li>alias指令</li>
        alias [aliasname] [command(s)] 为某个或者某些指令设置别名，例如<br>
        alias 100fps "fps_max 100" 把后面"fps_max 100"这条指令取一个别名为100fps，这时我们如果设置bind f1 100fps，那么按下f1就会切换到100fps<br>
        alias dropweapon "say_team ^2Dropped ^3[^5%w^3] at ^8%l;drop" 为dropweapon指令设置别名为dropweapon，这时我们如果设置bind g dropweapon，那么按下g就会发送丢弃武器信息并丢弃武器，和上述效果一样<br>
        <br>
        <li>exec指令</li>
        exec [filename] 执行一个指令文件，适用于加载已有cfg配置文件，例如<br>
        exec bigtree.cfg 把bigtree.cfg文件中的指令一行一行地执行<br>
        <br>
        <li>m_rawinput指令</li>
        m_rawinput [0/1] 游戏获取鼠标数据的方式, 0为获取经过系统设置(例如鼠标加速)的鼠标数据，1为直接获取鼠标原始数据<br>
        <br>
        <li>default_fov</li>
        default_fov [value]
        设置视角宽度
      </ul>
    </el-card>
    <br>
    <br>
    <el-card class="box-card">
      <div slot="header">
        <h1>AG多人游戏常用指令</h1>
      </div>
      <h2>==发送玩家信息指令==</h2>
      <pre class="Code">
say - 向所有人发送信息
say_team - 向队友发送信息
say_close - 向附近的人发送信息
</pre>
      <pre class="Code">
%H - 生命值
%A - 护甲值
%L - 位置
%W - 武器
%Q - 弹药
%P - 是否捡起长跳
%F - 是否捡起旗帜
</pre>

      <h2>颜色代码</h2>
      <div class="Code">
        <div>
          <el-image :src="textcolor"></el-image>
          <br>
          <el-image :src="textcolorusage"></el-image>
        </div>
        <div>^1 - <strong style="color: red">红</strong></div>
        <div>^2 - <strong style="color: green">绿</strong></div>
        <div>^3 - <strong style="color: yellow">黄</strong></div>
        <div>^4 - <strong style="color: blue">蓝</strong></div>
        <div>^5 - <strong style="color: cyan">青</strong></div>
        <div>^6 - <strong style="color: purple">紫</strong></div>
        <div>^7 - <strong style="color: grey">灰</strong></div>
        <div>^8 - <strong style="color: white">白</strong></div>
        <div>^9 - <strong>默认文字</strong></div>

      </div>

      <h2>==控制台指令==</h2>
      <pre class="Code">
help - 列出所有指令并解释
play_team file.wav - 向队友播放音频
play_close file.wav - 向附近的人播放音频
settings - 显示服务器设置
stopsound - 停止正在播放的所有音频
+commandmenu - 显示菜单
togglebrowser - 切换到服务其浏览器。密码保存在password.txt中
dropitems/drop flag - 在CTF模式中丢下旗帜
loadauthid (文件路径) - 加载玩家认证信息（steamid对应的真实名称），需要有realnames.txt文件。
</pre>

      <el-table :data="agCommandsTable" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>

      <h2>推荐设置 (如无特殊说明，1表示开启, 0表示关闭)</h2>
      <pre class="Code">
cl_lc 1 - 延迟补偿
cl_lw 1 - 此参数影响弹道，建议开启
</pre>

      <h2>==游戏模式名称==</h2>
      <pre class="Code">
ffa - 切换到全武器模式
tdm - 切换到tdm (FF1, WS0)模式
tdm2 - 切换到tdm2 (FF0,WS0)模式
tdm3 - 切换到tdm3 (FF0,WS1)模式
tdmx - 切换到tdmx模式
arena - 切换到arena模式
arcade - 切换到arcade模式
sgbow - 切换到仅用霰弹枪和弩模式
instagib - 切换到秒伤模式
lts - 切换到Last Team Standing模式
lms - 切换到Last Man Standing模式
ctf - 切换到CTF模式
</pre>

      <el-table :data="AGCommandsTable" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>
      <h2>HUD相关</h2>
      <el-table :data="AGCommandsTable2" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>
      <h2>人物模型</h2>
      <el-table :data="AGCommandsTable3" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>
      <h2>自定义准星</h2>
      <el-table :data="AGCommandsTable4" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>
    </el-card>
    <br>
    <br>
    <el-card class="box-card">
      <div slot="header">
        <h1>BFHL指令</h1>
      </div>
      <h2>一般设置</h2>
      <el-table :data="BFHLCommandsTable1" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>

      <h2>玩家移动</h2>
      <el-table :data="BFHLCommandsTable2" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>
      <h2>玩家模型</h2>
      <el-table :data="BFHLCommandsTable3" class="Code" :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
        <el-table-column prop="command" label="指令">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>
        <el-table-column prop="value" label="取值">
        </el-table-column>
        <el-table-column prop="example" label="示例">
        </el-table-column>
        <el-table-column prop="effect" label="效果">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filepath: "./files/command/Commands.xlsx",
      textcolor: require("@/assets/images/tutorial/commands/color.webp"),
      textcolorusage: require("@/assets/images/tutorial/commands/colorUsage.webp"),
      agCommandsTable: [
        {
          command: "yes",
          description: "对目前正在进行的投票投出赞成票",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "no",
          description: "对目前正在进行的投票投出反对票",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "spectate",
          description: "进入/退出观察者模式",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "agstart",
          description: "开始比赛指令，通过投票后执行。执行后服务器会重置回合时间，并10秒倒计时开始比赛。在比赛开始之后所有进入服务器的玩家都会强制进入观察者",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "agmap <mapname>",
          description: "换图指令，通过投票后执行，mapname为地图名称",
          value: "地图名",
          example: "agmap stalkx",
          effect: "投票换图为stalkx",
        },
        {
          command: "agpause",
          description: "暂停比赛指令，通过投票后执行，执行后服务器会暂停所有玩家当前的游戏",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "agabort",
          description: "中断比赛指令，通过投票后执行，执行后服务器会中断当前比赛，并允许所有人加入游戏",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "agallow",
          description: "中途加入指令，通过投票后执行。执行后允许指定的玩家在比赛中途加入比赛",
          value: "玩家名",
          example: "agallow oops",
          effect: "在比赛开始后允许名为“oops”的玩家加入比赛",
        },
        {
          command: "timeout",
          description: "超时指令，通过投票后执行。执行后比赛暂停一分钟",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "agkick",
          description: "踢出玩家指令，通过投票后执行。执行后将特定的玩家提出服务器",
          value: "玩家名",
          example: "agkick sucker",
          effect: "把名字为“sucker”的玩家踢出服务器",
        },
        {
          command: "<gamemode>",
          description: "切换游戏模式指令，直接输入模式的名字即可，通过投票后执行。执行后服务器会切换到指定的游戏模式。游戏模式的名字可在主页找到",
          value: "游戏模式名称",
          example: "gamemode hlccl",
          effect: "将服务器游戏模式切换到hlccl模式",
        },
        {
          command: "agnextmap <mapname>",
          description: "指定下一幅地图的指令，通过投票后执行，mapname为地图名称",
          value: "地图名",
          example: "agnextmap stalkyard",
          effect: "投票将下一张地图指定为stalkyard",
        },
        {
          command: "ag_spectalk",
          description: "允许观察者说话，1表示允许，0表示不允许",
          value: "0或1",
          example: "ag_spectalk 1",
          effect: "允许观察者说话",
        },
        {
          command: "ag_gauss_fix",
          description: "修复self_gauss伤害，1表示修复，0表示不修复",
          value: "0或1",
          example: "ag_gauss_fix 1",
          effect: "修复self_gauss伤害",
        },
        {
          command: "ag_rpg_fix",
          description: "修复rpg的bug，1表示修复，0表示不修复",
          value: "0或1",
          example: "ag_rpg_fix 1",
          effect: "修复rpg的bug",
        }
      ],
      BFHLCommandsTable1: [
        {
          command: "m_rawinput",
          description: "游戏获取鼠标数据的方式, 0为获取经过系统设置(例如鼠标加速)的鼠标数据，1为直接获取鼠标原始数据",
          value: "0或1",
          example: "m_rawinput 1",
          effect: "开启鼠标原始输入",
        },
        {
          command: "r_dynamic_ent_light",
          description: "动态光效(例如手电筒、爆炸、rpg火箭所发出的光)的开关，若开启该指令（即值 = 1），游戏将启动动态光效",
          value: "0或1",
          example: "r_dynamic_ent_light 1",
          effect: "开启动态光效",
        },
        {
          command: "customtimer <interval> <number>",
          description: '设定一个倒计时并从设定的时间开始倒数，倒计时会显示在HUD上。当倒计时数到0时会发出响声。最多可设定两个独立的倒计时，使用"number"来指定。',
          value: "倒计时间隔，计时器编号",
          example: "customtimer 20 1;customtimer 10 2",
          effect: "设定一个20秒的倒计时以及一个10秒的倒计时",
        },
        {
          command: "update_check",
          description: "检查BFHL的更新",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "update_changelog",
          description: "若BFHL有更新，则列出更新的内容",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "cl_check_for_updates",
          description: "自动检查BFHL更新开关，若开启该指令（即值 = 1），游戏将在每次启动时自动检查BFHL是否有更新",
          value: "0或1",
          example: "/",
          effect: "/",
        },
        {
          command: "cl_enable_html_motd",
          description: "是否启用HTML MOTDs组件，建议设为1以支持HTML MOTDs",
          value: "0或1",
          example: "/",
          effect: "/",
        },
        {
          command: "cl_hidecorpses",
          description: "隐藏尸体开关，若开启该指令（即值 = 1），在死亡的玩家复活后游戏将会自动移除该玩家的尸体。",
          value: "0或1",
          example: "/",
          effect: "/",
        },
        {
          command: "cl_killsound",
          description: "击杀音效开关，若开启该指令（即值 = 1），则在每次击杀成功后都会播放特定音效",
          value: "0或1",
          example: "/",
          effect: "/",
        },
        {
          command: "cl_killsound_path <path>",
          description: "击杀音效的自定义文件路径，path为sound文件夹下的文件路径",
          value: "文件目录",
          example: "cl_killsound_path scientist/scream1.wav",
          effect: "每次击杀都会听见科学家的尖叫",
        },
        {
          command: "bhl_validate_files",
          description: "检测BFHL的文件完整性",
          value: "/",
          example: "/",
          effect: "/",
        },
        {
          command: "about",
          description: "查看BFHL的信息",
          value: "/",
          example: "/",
          effect: "/",
        },
      ],
      BFHLCommandsTable2: [
        {
          command: "+ljump",
          description: "一键长跳(即跳蹲)，使用方式为bind “长跳按键” “+ljump”",
          value: "/",
          example: 'bind "v" "+ljump"',
          effect: "绑定v键为长跳",
        },
        {
          command: "+ducktap",
          description: "自动小跳(MCJ)指令，使用方式为bind “小跳按键” “+ducktap”",
          value: "/",
          example: 'bind "c" "+ducktap"',
          effect: "绑定c键为自动小跳",
        },
        {
          command: "cl_autojump",
          description: "自动连跳开关，若开启该指令（即值 = 1），则在玩家按住跳跃键时会一直自动连跳",
          value: "0或1",
          example: "/",
          effect: "/",
        },
        {
          command: "cl_autojump_priority",
          description: "自动连跳和自动小跳的优先级调整，若该指令值为1，那么自动连跳的优先级将高于自动小跳，即当跳跃键和小跳按键同时按下时，玩家只会连跳",
          value: "0或1",
          example: "/",
          effect: "/",
        },
        {
          command: "cl_jumptype",
          description: "跳跃方式，在关闭自动连跳的情况下，若该指令值为1，系统会把你每次按下跳跃时的指令延迟到触地的一帧才生效，利用该指令可以手动实现速度无损的连跳",
          value: "0或1",
          example: "cl_jumptype 1",
          effect: "在cl_autojump 0的情况下实现手动无损连跳",
        }
      ],
      BFHLCommandsTable3: [
        {
          "command": "forcemodel <player> <model>",
          "description": "给特定的玩家强制指定人物模型，player为玩家名字，model为模型名称",
          "value": "字符串",
          "example": "forcemodel Noob blue",
          "effect": "给名字为\"Noob\"的玩家强制指定名为\"blue\"的人物模型"
        },
        {
          "command": "forcecolors <player> <color>",
          "description": "给特定的玩家强制指定人物模型颜色，player为玩家名字，color为顶色和底色的值",
          "value": "字符串，正整数",
          "example": "forcemodel Noob 80 100",
          "effect": "给名字为\"Noob\"的玩家模型强制指定顶色80，底色100"
        },
        {
          "command": "cl_forceenemymodels \"model1;model2\"",
          "description": "给敌人强制指定人物模型，可以同时指定多个模型",
          "value": "字符串组",
          "example": "cl_forceenemymodels \"zombie;scientist\"",
          "effect": "给敌人强制指定\"zombie\"以及\"scientist\"两种模型"
        },
        {
          "command": "cl_forceenemycolors <color>",
          "description": "给敌人强制指定人物模型颜色，color为顶色和底色的值",
          "value": "正整数",
          "example": "cl_forceenemycolors 80 100",
          "effect": "给敌人的玩家模型强制指定顶色80，底色100"
        },
        {
          "command": "cl_forceteammatesmodel",
          "description": "给队友强制指定人物模型",
          "value": "字符串",
          "example": "cl_forceteammatesmodel blue",
          "effect": "给队友强制指定名为blue的人物模型"
        },
        {
          "command": "cl_forceteammatescolors <color>",
          "description": "给队友强制指定人物模型颜色，color为顶色和底色的值",
          "value": "正整数",
          "example": "cl_forceteammatescolors 20 50",
          "effect": "给队友的玩家模型强制指定顶色20，底色50"
        },
        {
          "command": "cl_righthand",
          "description": "左右手持枪控制，若开启该指令（即值 = 1），游戏将会使用左手持枪模型",
          "value": "0或1",
          "example": "/",
          "effect": "/"
        },
        {
          "command": "cl_viewmodel_ofs_right",
          "description": "将v模往右偏移指定的值，若该值为负数，则往左偏移。",
          "value": "数值",
          "example": "cl_viewmodel_ofs_right 20",
          "effect": "把V模向右偏移20个单位"
        },
        {
          "command": "cl_viewmodel_ofs_forward",
          "description": "将v模往前偏移指定的值",
          "value": "数值",
          "example": "/",
          "effect": "/"
        },
        {
          "command": "cl_viewmodel_ofs_up",
          "description": "将v模往上偏移指定的值",
          "value": "数值",
          "example": "/",
          "effect": "/"
        },
        {
          "command": "cl_viewmodel_fov",
          "description": "改变v模的视角宽度，区别于default_fov命令，该命令不改变游戏本身的视角宽度，而仅仅是改变了武器模型。",
          "value": "0-180",
          "example": "cl_viewmodel_fov 120",
          "effect": "把V模改变到fov为120时的样子"
        },
        {
          "command": "cl_viewrollangle",
          "description": "左右移动时视角晃动的最大角度，建议设为0关闭晃动",
          "value": "≥0的整数",
          "example": "cl_viewrollangle 360",
          "effect": "动一下把脑浆摇匀"
        },
        {
          "command": "cl_viewrollspeed",
          "description": "视角晃动的速度，值越大晃动速度越慢",
          "value": "≥0的整数",
          "example": "/",
          "effect": "/",
        },
        {
          "command": "cl_bob_angled",
          "description": "前后移动时武器是否旋转，若开启该指令（即值 = 1），在前后走动时武器会略微带点旋转",
          "value": "0或1",
          "example": "/",
          "effect": "/"
        },
        {
          "command": "cl_noshells",
          "description": "子弹壳显示开关，若开启该指令（即值 = 1），则不会显示任何子弹壳",
          "value": "0或1",
          "example": "/",
          "effect": "/"
        },
        {
          "command": "cl_viewmodel_hltv",
          "description": "模拟HLTV的效果，屏蔽武器模型的某些特定动画。0为不启用，+1为屏蔽空闲动画，+2为屏蔽换枪动画，+4为屏蔽开火动画，+8为屏蔽换弹动画，7为屏蔽除了换弹的所有动画，15为屏蔽所有动画。",
          "value": "1-15的整数",
          "example": "cl_viewmodel_hltv 10",
          "effect": "10=8+2，因此该命令屏蔽的是换弹动画以及切枪动画"
        },

      ],
      AGCommandsTable: [
        {
          "command": 'agrecord [name] ',
          "description": '开始记录demo，name为demo文件名，如果留空直接输入agrecord的话，demo将默认以时间-地图名的方式命名demo',
          "value": '字符串',
          "example": 'agrecord Promatch',
          "effect": '开始记录demo，demo文件名为Promatch',
        },
        {
          "command": 'cl_autorecord',
          "description": '若开启该指令（即值 = 1），那么游戏将会在每次比赛开始(agstart之后)之后自动录制demo',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_autostop',
          "description": '若开启该指令（即值 = 1），那么在比赛结束3秒后游戏将会自动停止demo的录制。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_autojump',
          "description": '开启该指令（即值 = 1）以使用自动连跳',
          "value": '0或1',
          "example": 'cl_autojump 1',
          "effect": '持续按跳跃键即可一直连跳',
        },
        {
          "command": '+ducktap',
          "description": '自动小跳(MCJ)指令，使用方式为bind “小跳按键” “+ducktap”',
          "value": '/',
          "example": 'bind c "+ducktap"',
          "effect": '持续按c键即可一直小跳',
        },
        {
          "command": 'cl_autowepswitch ',
          "description": '自动切换武器的开关，若开启该指令（即值 = 1），那么当你捡起更强大的武器时会自动切换到该武器',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": ' cl_scores [#]',
          "description": '在HUD面板上显示一个小记分牌并显示前#个玩家的分数',
          "value": '正整数',
          "example": ' cl_scores 2',
          "effect": '显示前2名玩家的分数',
        },
        {
          "command": 'cl_scores_pos "x y" ',
          "description": '控制小记分牌的显示位置，x和y为两个方向上偏移的坐标',
          "value": '坐标',
          "example": 'cl_scores_pos 100 100',
          "effect": '将小记分牌的位置往水平和垂直方向都偏移100个单位',
        },
        {
          "command": 'cl_righthand',
          "description": '左右手持枪控制，若开启该指令（即值 = 1），游戏将会使用左手持枪模型',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_viewrollangle',
          "description": '左右移动时视角晃动的最大角度，建议设为0关闭晃动',
          "value": '≥0的整数',
          "example": 'cl_viewrollangle 360',
          "effect": '动一下把脑浆摇匀',
        },
        {
          "command": 'cl_viewrollspeed ',
          "description": '视角晃动的速度，值越大晃动速度越慢',
          "value": '≥0的整数',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_hidecorpses ',
          "description": '隐藏尸体开关，若开启该指令（即值 = 1），在死亡的玩家复活后游戏将会自动移除该玩家的尸体。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_old_scoreboard',
          "description": '老式记分板开关，若开启该指令（即值 = 1），那么游戏将会使用老版AG的计分板样式。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_old_scoreboard_width',
          "description": '改变老式计分板的宽度，在windows系统下最小的宽度为320，Linux下则为380。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_viewmodel_fov',
          "description": '改变v模的视角宽度，区别于default_fov命令，该命令不改变游戏本身的视角宽度，而仅仅是改变了武器模型。',
          "value": '0-180',
          "example": 'cl_viewmodel_fov 120',
          "effect": '把V模改变到fov为120时的样子',
        },
        {
          "command": 'cl_viewmodel_ofs_right ',
          "description": '将v模往右偏移指定的值，若该值为负数，则往左偏移。',
          "value": '数值',
          "example": 'cl_viewmodel_ofs_right 20',
          "effect": '把V模向右偏移20个单位',
        },
        {
          "command": 'cl_viewmodel_ofs_forward',
          "description": '将v模往前偏移指定的值，若该值为负数，则往后偏移。',
          "value": '数值',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_viewmodel_ofs_up',
          "description": '将v模往上偏移指定的值，若该值为负数，则往下偏移。',
          "value": '数值',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_killsound',
          "description": '击杀音效开关，若开启该指令（即值 = 1），则在每次击杀成功后都会播放特定音效',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_killsound_path <path>',
          "description": '击杀音效的自定义文件路径，path为sound文件夹下的文件路径',
          "value": 'sound文件夹下的文件目录',
          "example": 'cl_killsound_path scientist/scream1.wav',
          "effect": '每次击杀都会听见科学家的尖叫',
        },
      ],
      AGCommandsTable2: [
        {
          "command": ' hud_color "R G B"',
          "description": '使用RGB的值来指定HUD的颜色',
          "value": 'RGB颜色值',
          "example": ' hud_color 255 255 255',
          "effect": '将HUD颜色设置为RGB="255 255 255", 即纯白色',
        },
        {
          "command": 'hud_timer',
          "description": '计时器开关，若该指令 = 1，显示当前剩余时间，若该指令 = 2， 则显示已经过去的时间。',
          "value": '0, 1, 2',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_speedometer',
          "description": '计速器开关，若开启该指令（即值 = 1），在HUD会显示当前移动速度。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_speedometer_below_cross',
          "description": '是否把速度显示在准星下方。若开启该指令（即值 = 1），则计速器的数值会显示在准星下方。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_draw_deathnotices_always',
          "description": '强制击杀信息显示，若开启该指令（即值 = 1），则即使在关闭hud (hud_draw 0)的情况下也会显示击杀信息。通常用于录制击杀短片',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_saytext_sound',
          "description": '信息提示音开关，若开启该指令（即值 = 1），则每当游戏的聊天框有新消息时都会播放提示音。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_rainbow',
          "description": '彩虹色HUD开关，开启该指令（即值 = 1）会让你的HUD变成动态的彩色显示。',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_rainbow_sat',
          "description": '彩虹色HUD的饱和度，值越大颜色越鲜艳',
          "value": '0-100',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_rainbow_val',
          "description": '彩虹色HUD的明度，值越大HUD越明显',
          "value": '0-100',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_rainbow_speed',
          "description": '控制彩虹色HUD每秒颜色的变化速度，值越大变化越快',
          "value": '正整数',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_rainbow_xphase',
          "description": '控制彩虹色HUD水平方向上的颜色变化率，值越大水平方向的颜色变化越剧烈',
          "value": '正整数',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'hud_rainbow_yphase',
          "description": '控制彩虹色HUD垂直方向上的颜色变化率，值越大垂直方向的颜色变化越剧烈',
          "value": '正整数',
          "example": '/',
          "effect": '/',
        },
      ],
      AGCommandsTable3: [
        {
          "command": 'cl_forcemodel <player> <model>',
          "description": '给特定的玩家强制指定人物模型，player既可以是游戏内的名字，也可以是Steam ID，甚至是游戏内的ID(例如#123)，model为模型名称',
          "value": '字符串',
          "example": 'cl_forcemodel Noob blue',
          "effect": '给名字为"Noob"的玩家强制指定名为"blue"的人物模型',
        },
        {
          "command": 'cl_forcemodel_list',
          "description": '列出目前已经强制指定的模型',
          "value": '/',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_forcemodel_remove <player>',
          "description": '给特定玩家移除强制指定的人物模型',
          "value": '字符串',
          "example": 'cl_forcemodel Noob',
          "effect": '移除先前给名字为Noob的玩家强制指定的模型',
        },
        {
          "command": 'cl_forceteammodel <team> <model>',
          "description": '给特定的团队指定人物模型，team为团队名字，model为模型名称',
          "value": '字符串',
          "example": 'cl_forceteammodel gordon red',
          "effect": '把“gordon”团队的玩家模型替换为"red"',
        },
        {
          "command": 'cl_forceteammodel_remove <team>',
          "description": '给特定团队移除强制指定的人物模型',
          "value": '字符串',
          "example": 'cl_forceteammodel_remove gordon',
          "effect": '移除先前给名字为gordon的团队强制指定的模型',
        },
        {
          "command": 'cl_forceteammatemodel <model>',
          "description": '给队友强制指定人物模型，若想还原，直接取值为 "" 即可。 ',
          "value": '字符串',
          "example": 'cl_forceteammatemodel red',
          "effect": '将队友的玩家模型强制指定为red',
        },
        {
          "command": 'cl_forceenemymodel <model>',
          "description": '给敌人强制指定人物模型，若想还原，直接取值为 "" 即可。 ',
          "value": '字符串',
          "example": 'cl_forceenemymodel blue',
          "effect": '将敌人的玩家模型强制指定为blue',
        },
      ],
      AGCommandsTable4: [
        {
          "command": 'cl_cross',
          "description": '自定义准星开关，若开启该指令（即值 = 1），游戏将启用自定义准星',
          "value": '0或1',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_cross_alpha',
          "description": '自定义准星的透明度，取值越小准星越透明',
          "value": '0-255',
          "example": 'cl_cross_alpha 255',
          "effect": '将准星设置为完全不透明',
        },
        {
          "command": 'cl_cross_circle_radius',
          "description": '自定义准星圆圈的半径，设为0即不显示圆圈',
          "value": '≥0的整数',
          "example": 'cl_cross_circle_radius 8',
          "effect": '将准星圆圈半径设为8 px',
        },
        {
          "command": 'cl_cross_color "R G B"',
          "description": '自定义准星的颜色，使用RGB值来指定',
          "value": 'RGB颜色值',
          "example": 'cl_cross_color 0 255 0',
          "effect": '将准星变为纯绿色',
        },
        {
          "command": 'cl_cross_dot_size',
          "description": '自定义准星中间小圆点的大小，设为0即不显示圆点',
          "value": '≥0的整数',
          "example": 'cl_cross_dot_size 2',
          "effect": '将准星中间的圆点大小设为2 px',
        },
        {
          "command": 'cl_cross_dot_color "R G B"',
          "description": '自定义准星中间小圆点的颜色，使用RGB值来指定',
          "value": 'RGB颜色值',
          "example": 'cl_cross_color 255 255 255',
          "effect": '将准星中间的圆点颜色设置为白色',
        },
        {
          "command": 'cl_cross_gap',
          "description": '自定义准星中间的间隔大小',
          "value": '≥0的整数',
          "example": 'cl_cross_gap 2',
          "effect": '将准星的间隔大小设为2 px',
        },
        {
          "command": 'cl_cross_size',
          "description": '自定义准星的大小(或者说是长度)',
          "value": '≥0的整数',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_cross_thickness',
          "description": '自定义准星线的宽度',
          "value": '≥0的整数',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_cross_outline',
          "description": '自定义准星描边线的宽度，设为0即不描边',
          "value": '≥0的整数',
          "example": '/',
          "effect": '/',
        },
        {
          "command": 'cl_cross_{top,bottom,left,right}_line',
          "description": '是否显示自定义准星各个方向的线，对应指令取值为1代表显示',
          "value": '0或1',
          "example": 'cl_cross_top_line 0',
          "effect": '去除准星上边的线',
        },
      ],
    }
  },
  mounted() {
    document.title = "指令 - CN-AGHL";
  }
}
</script>
<style src="@/assets/css/command.css" scoped>
</style>