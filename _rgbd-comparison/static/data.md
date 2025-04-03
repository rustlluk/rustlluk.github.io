The data structure at <a href="https://osf.io/f2seb/files/osfstorage" target="_blank">osf.io</a> is as follows:  
- *data*
    - this folder contains the actual RGB-D data
    - The structure looks as:
         ```
          data
          │  
          └───dataset
          │   └───distance_1
          │   │   ...
          │   └───distance_n
          |       └───rgbd
          |           └───D435
          |               │   color_frame_1.png
          |               │   ...
          |               │   color_frame_30.png
          |               │   depth_frame_1.png
          |               │   ...
          |               │   depth_frame_30.png
          |               └───segmented
          |                   │   point_cloud_frame_1.pcd
          |                   │   ...
          |                   │   point_cloud_frame_30.pcd
          |           └───D455
          |               │   color_frame_1.png
          |               │   ...
          |               │   color_frame_30.png
          |               │   depth_frame_1.png
          |               │   ...
          |               │   depth_frame_30.png
          |               └───segmented
          |                   │   point_cloud_frame_1.pcd
          |                   │   ...
          |                   │   point_cloud_frame_30.pcd
          |           └───ZED
          |               │   color_frame_1.png
          |               │   ...
          |               │   color_frame_30.png
          |               │   depth_frame_1.png
          |               │   ...
          |               │   depth_frame_30.png
          |               └───segmented
          |                   │   point_cloud_frame_1.pcd
          |                   │   ...
          |                   │   point_cloud_frame_30.pcd
          |           └───Luxonis
          |               │   color_frame_1.png
          |               │   ...
          |               │   color_frame_30.png
          |               │   depth_frame_1.png
          |               │   ...
          |               │   depth_frame_30.png
          |               └───segmented
          |                   │   point_cloud_frame_1.pcd
          |                   │   ...
          |                   │   point_cloud_frame_30.pcd
    
         ```
        - dataset can be doll, planes, or ycb
            - in case of YCB, therese addition *subdirectory* named after the object name in *.../rgdb* subdirectory, e.g., *.../rgbd/box/D435/...*
            
- *gt/pcds*
    - this folders contains ground-truth point clouds in PCD format
    - there is always whole point cloud, e.g., *box.pcd* and cropped point cloud used for similarity computation, e.g., *box_02.pcd*, where the number stands for the percentual part of object extend used, e.g., *02* = *20%*
- *results*
    - this folder include three files for each dataset (planes, ycb and doll)
        - *{dataset}_transformations.pkl*
            - pickle file with dictionary containing transformation used to fit the given objects to the ground-truth with a structure:
              ```
              {dataset}_transformations.pkl
              │  
              └───D435
              │   └───distance_1
              |       └───object_1
              |           └───()
              │       │   ...
              |       └───object_n
              |           └───()
              │   └───distance_n
              |       └───object_1
              |           └───()
              │       │   ...
              |       └───object_n
              |           └───()
    
              ```
                - the same applies for other cameras (D435, D455, ZED, luxonis)
                - in the last Python tuple, the first element is translation *t* of the object and second element is transformation matrix *R*
                        - one should transform the point clouds as pcd.translate(t) and pcd.transform(R)
        - *{dataset}_metrics.pkl*
            - pickle file with dictionary containing metrics used to create figures in the paper with a tructure:
              ```
              {dataset}_metrics.pkl
              │  
              └───normals
              │   └───D435
              │       └───distance_1
              |           └───object_1
              |               └───[]
              │           │   ...
              |           └───object_n
              |               └───[]
              │       └───distance_n
              |           └───object_1
              |               └───[]
              │           │   ...
              |           └───object_n
              |               └───[]
              ```
                - the same applies for other metrics for the given dataset("normals", "jacs", "cds", "bias", "precision")
                    - normals - angles between closest normals
                    - jacs - Jaccard similarity
                    - cds - Chamfer distance
                    - bias - Bias
                    - precision - Precision
                - the last list contains float value of the given metric
        - *{dataset}_metrics.mat*
            - the same struture as .pkl files, but with structures instead of dictionaries to be used in Matlab 
    - to load pickle file in python:
        ```
        import pickle as pkl
        with open("file.pkl", "rb") as f:
            data = pkl.load(f)
        ```
- *code*  
    - the directory with sample codes to segment, manually fit point clouds and compute similarity metrics
    - the code was tested with Python3.11
        - to install dependencies with virtualenv:
            - ```
              python3.11 -m venv camera_comp
              source camera_comp/bin/activate
              python3 -m pip install -r requirements.txt
              ```
    - the individual *.py* files:
        - *utils* - utils to load point clouds, metrics, ...
        - *dist_utils* - utils to compute the metrics used
        - *compute_similarity* - script to compute all similarities
        - *manual_fit* - script to manually check and refine transformations of point clouds to ground-truth
        - *segment* - script to segment the point clouds