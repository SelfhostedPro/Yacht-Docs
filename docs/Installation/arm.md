---
title: ARM
description: Arm Caviats
hide_table_of_contents: true
id: ARM
---

## Memory support in graphs
If you're on arm and graphs aren't showing up add the following to your cmdline.txt:

```
cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1
```