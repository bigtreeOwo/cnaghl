<template>
  <div class="AGTricksContent">
    <h1>外 设 设 置</h1>
    <p>
      1.配置建议
    </p>
    <p>
      你可能会感到纳闷，一款1998年的游戏还要什么配置？
      答案是需要的，但并不是因为游戏对配置要求高，而是外设对配置的要求反而比游戏高。
      也得益于外设的不断进化，现在有许多AGHL玩家不仅身法流畅，枪法也十分精确。
      比如，crossfire这张图已经从曾经的来回打太极变成了枪法好就能枪枪爆头、打死对手的究极内卷。
      <br>
      如果你没有经济条件，没有关系，你依旧可以进行游戏，只是某些操作会变得更有挑战性。
    </p>
    <br>
    <p>
      显示器：
    </p>
    <p>
      比如，你的屏幕刷新率当然要越高越好，响应时间越低越好，这样看到的画面才会更流畅，更容易看清敌人及其行动轨迹。
      因此你需要一台电竞级的显示器，而老显卡是不支持高刷新率的。
      建议的屏幕刷新率为至少144HZ，分辨率不低于1920x1080(现在应该没有1080P以下的显示器了吧？)
      现代的“电竞显示器”普遍已经支持高刷新率。
    </p>
    <br>
    <p>
      鼠标：
    </p>
    <p>
      由于AGHL经常需要做大幅度的鼠标移动（比如高斯跳），因此强烈建议使用“游戏鼠标”，这些鼠标通常是定位最准确的，快速移动鼠标时也不会出现卡顿、丢帧、平滑等因鼠标性能差劲造成的现象。
      现代鼠标的传感器已经十分精确（Hero25K、PAW3395等），刷新率也非常高（1000HZ+），因此，比起鼠标传感器的性能，鼠标的模具以及大小是否适合你的手，才是最重要的。
      鼠标的刷新率越高，对CPU的要求也越高，因此你懂得。。。
    </p>
    <p>
      不同的人对鼠标的要求也是不一样的，但你依旧可以参考他人。
      以下是大部分被认为是"顶级玩家"使用的鼠标：
    </p>
    <el-table class="mousetable" :data="mousebrandTable" border :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
      <el-table-column prop="player" label="玩家">
      </el-table-column>
      <el-table-column prop="brand" label="品牌">
      </el-table-column>
    </el-table>
    <br>
    <p>
      键盘：
    </p>
    <p>
      AGHL通常需要你在短时间内做N多种操作。也就是说，你需要在短时间内按多个按键。
      然而，如果你使用过一些办公键盘，你应该会发现，同时按超过3或4个按键后，其他按键就不再有效果，并且Windows也会发出警告声，这是由于键位冲突造成的。
      键位冲突的原因在于，有的键盘通常不是每个键都由一根独立的信号线连接，而是多个键共用一根信号线。当多个键被同时按下时，就可能发生冲突。
      因此，最好选择无按键冲突或至少6键冲突的键盘。
    </p>
    <br>
    <p>
      音频设备：
    </p>
    <p>
      由于HL是古董级游戏，且声音全部都通过CPU处理，音质对现代标准来说也十分差劲（16bit 游戏内大部分音效的采样率为8000/16000hz），因此你完全不需要再额外购买声卡。
      主板的集成声卡完全够用，尤其是对娱乐来说。
    </p>
    <br>
    <p>
      耳机还是音箱？
    </p>
    <p>
      根据你对声音曲线的爱好，与实际场景结合，再做选择即可。
      这里的声音曲线，是指你喜欢什么样的调音风格。
      比如你喜欢低音更重一些，那选择低音重一些的音频设备即可。
      如果你需要声卡带来的辅助功能（例如压缩器、虚拟环绕声等）
      我很遗憾的告诉你，HL的音效十分的响亮，且始终只能是立体声（双声道），使用虚拟环绕反而会听不准，压缩器虽然可以把安静的声音放大，但是会很难分辨敌人的距离。
      因此，无任何音染的音频输出反而是最好的。
    </p>
    <hr>
    <p>
      在你终于折腾完上述内容后，就可以开始对游戏进行设置了。
    </p>
    <br>
    <p>
      游戏设置：
    </p>
    <br>
    <p>
      显卡设置：建议在显卡控制面板中开启，低延迟模式。<br>
      Nvidia显卡称其为 低延迟模式，而AMD显卡其称为 Anti-Lag。
    </p>
    <br>
    <p>
      应用优化参数：
    </p>
    <p>
      你可以直接下载我们提供的配置文件。其使用教程及参数机制我们都已经写在里面。
    </p>
    <br>
    <p>
      禁用鼠标加速：
    </p>
    <p>
      HL默认会启用鼠标加速，鼠标加速的作用是：你的灵敏度将同时取决于灵敏度大小以及你移动鼠标的速度。
      鼠标移动得越快，鼠标灵敏度越高。
      这种设置会影响你拉抢时的定位能力。
      因此不建议使用鼠标加速。
      在鼠标设置里打开Raw Input（原始鼠标数据输入）即可禁用鼠标加速。
    </p>
    <br>
    <p>
      鼠标灵敏度：
    </p>
    <p>
      由于AGHL是高机动游戏，大部分玩家不会使用特别低的灵敏度来补偿枪法。
      因此也不建议你使用太低的灵敏度。
      <br>
      鼠标DPI×游戏内的灵敏度 = eDpi
      <br>
      建议的eDpi为1200~3200
    </p>
    <p>
      以下是常驻玩家的灵敏度数据。
    </p>
    <el-table class="mousetable" :data="sensTable" border :header-cell-style="{ background: '#4c5847', color: 'white' }" :cell-style="{ background: '#3e4537', color: 'white' }">
      <el-table-column prop="player" label="玩家">
      </el-table-column>
      <el-table-column prop="dpi" label="dpi">
      </el-table-column>
      <el-table-column prop="sens" label="灵敏度">
      </el-table-column>
      <el-table-column prop="edpi" label="edpi">
      </el-table-column>
      <el-table-column prop="accel" label="是否开启鼠标加速">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mousebrandTable: [
        {
          player: "HR | Alex",
          brand: "罗技 G102 & 雷蛇响尾蛇 2016"
        },
        {
          player: "executλble（立陶宛大师）",
          brand: "罗技G Pro有线版"
        },
        {
          player: "MéngNWT",
          brand: "迈从 A5 Pro Max"
        },
        {
          player: "RRTS Chun",
          brand: "罗技 M100R"
        },
        {
          player: "bigtree",
          brand: "蜻蜓 R1 SE"
        }
      ],
      sensTable: [
        {
          player: "HR | Alex",
          dpi: "1600",
          sens: "0.955",
          edpi: "1528左右",
          accel: "开（Windows加速）",
        },
        {
          player: "executλble（立陶宛大师）",
          dpi: "800",
          sens: "1.85",
          edpi: "1480",
          accel: "关",
        },
        {
          player: "exe.Reebok",
          dpi: "400",
          sens: "2.5",
          edpi: "1000",
          accel: "关",
        },
        {
          player: "RRTS Chun",
          dpi: "1000",
          sens: "11.4",
          edpi: "11400左右",
          accel: "开（Windows加速）",
        },
        {
          player: "Real-Hunter",
          dpi: "350",
          sens: "5",
          edpi: "1750",
          accel: "关",
        },
        {
          player: "MéngNWT",
          dpi: "1800",
          sens: "1.400",
          edpi: "2520左右",
          accel: "开（Rawaccel，线性0.01，不封顶）",
        },
        {
          player: "bigtree",
          dpi: "1200",
          sens: "2.5",
          edpi: "3000",
          accel: "关",
        },
        {
          player: "UI6NWT",
          dpi: "800",
          sens: "2.5",
          edpi: "2000",
          accel: "关",
        },
        {
          player: "rurumu",
          dpi: "1000",
          sens: "3.1",
          edpi: "3100",
          accel: "关",
        },
        {
          player: "AnonChihaya",
          dpi: "400",
          sens: "5",
          edpi: "2000",
          accel: "关",
        },
        {
          player: "miCRO",
          dpi: "1600",
          sens: "4",
          edpi: "6400",
          accel: "关",
        },
        {
          player: "eternd",
          dpi: "2000",
          sens: "3.3",
          edpi: "6600",
          accel: "关",
        },
        {
          player: "starx",
          dpi: "1000",
          sens: "1.1",
          edpi: "1100",
          accel: "关",
        },
        {
          player: "1nazuma",
          dpi: "800",
          sens: "3.5",
          edpi: "2800",
          accel: "关",
        },
        {
          player: "OguriCap",
          dpi: "800",
          sens: "1.2",
          edpi: "960",
          accel: "关",
        }
      ]
    }
  }
}
</script>

<style src="@/assets/css/basicskill.css" scoped>
</style>